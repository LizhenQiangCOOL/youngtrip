<template>
  <v-card class="mx-3 mt-4">
    <v-card-title class="d-flex justify-center">{{id ? '修改游记' : '记录游记'}}</v-card-title>
    <v-card-text>
      <form lazy-validation>
        <v-text-field
          v-model.trim="title"
          :error-messages="titleErrors"
          label="标题"
          :counter="80"
          required
          clearable
          @blur="$v.title.$touch()"
        ></v-text-field>

        <v-file-input
          v-if="!pichidden"
          v-model="pic"
          accept="image/*"
          show-size
          label="封面图"
          prepend-icon="mdi-camera"
          required
        ></v-file-input>
        
        <v-textarea
          solo
          label="内容"
          messages="内容"
          required
          clearable
          counter="300"
          v-model.trim="content"
          :error-messages="contentErrors"
          @blur="$v.content.$touch()"
        ></v-textarea>
        <v-text-field
          v-model.trim="location"
          label="地点"
          required
          clearable
          :error-messages="locationErrors"
          @blur="$v.location.$touch()"
        ></v-text-field>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="时间"
              prepend-icon="event"
              readonly
              v-on="on"
              required
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">取消</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">确定</v-btn>
          </v-date-picker>
        </v-menu>

        <v-row>
          <v-col class="d-flex justify-center">
            <v-btn color="success" @click="cardcreate">提交</v-btn>
          </v-col>
        </v-row>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    title: {
      required,
      maxLength: maxLength(80)
    },
    content: { required, maxLength: maxLength(300) },
    location: { required, maxLength: maxLength(50) }
  },
  data: () => ({
    id: null,
    title: "",
    pic: null,
    content: "",
    location: "",
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    pichidden: false
  }),
  beforeRouteLeave(to, from, next) {
    this.clearData();
    next();
  },
  created() {
    const cardId = this.$route.params.cardId || null;
    const card = this.$route.params.card || null;
    if (cardId !== null) {
      this.id = cardId;
      this.pic = null;
      this.pichidden = true;
      this.$store.dispatch("updateAlter", {
        msg: "暂时不支持修改图片",
        msgType: "info",
        msgShow: true
      });

      if (card && cardId === card.id) {
        let obj = card;
        this.title = obj.title;
        this.content = obj.content;
        this.location = obj.location;
        this.date = obj.date;
      } else {
        this.axios
          .get(`/card/${cardId}/`)
          .then(response => {
            let obj = response.data;
            this.title = obj.title;
            this.content = obj.content;
            this.location = obj.location;
            this.date = obj.date;
          })
          .catch(error => {
            this.$store.dispatch("updateAlter", {
              msg: "网络异常",
              msgType: "error",
              msgShow: true
            });
            this.$router.back(-1);
          });
      }
    }
  },
  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.required && errors.push("标题必填");
      !this.$v.title.maxLength && errors.push("标题最长80字符串");
      return errors;
    },
    contentErrors() {
      const errors = [];
      if (!this.$v.content.$dirty) return errors;
      !this.$v.content.required && errors.push("内容必填");
      !this.$v.content.maxLength && errors.push("内容最长300字符串");
      return errors;
    },
    locationErrors() {
      const errors = [];
      if (!this.$v.location.$dirty) return errors;
      !this.$v.location.required && errors.push("地点必填");
      !this.$v.location.maxLength && errors.push("地点最长50字符串");
      return errors;
    }
  },
  methods: {
    filetoDataURL(file, fn) {
      var reader = new FileReader();
      reader.onloadend = function(e) {
        fn(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    cardcreate() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.$nextTick(() => {
          this.submit();
        });
      }
    },
    submit() {
      if (this.id === null) {
        let formData = new FormData();
        formData.append("userprofile", this.$store.state.user.userinfo.id);
        formData.append("title", this.title);
        formData.append("pic", this.pic);
        formData.append("content", this.content);
        formData.append("location", this.location);
        formData.append("date", this.date);
        const headers = {
          Authorization: `jwt ${this.$store.state.user.token}`,
          "Content-Type": "multipart/form-data"
        };
        this.axios
          .post(`/card/`, formData, { headers: headers })
          .then(response => {
            this.$store.dispatch("updateAlter", {
              msg: response.data.msg,
              msgType: "success",
              msgShow: true
            });

            this.$router.push({
              name: "Content",
              params: { cardId: response.data.data.id }
            });
          })
          .catch(error => {
            this.$store.dispatch("updateAlter", {
              msg: "记录游记失败",
              msgType: "error",
              msgShow: true
            });
          });
      } else {
        const card = {
          title: this.title,
          content: this.content,
          location: this.location,
          date: this.date
        };
        const headers = {
          Authorization: `jwt ${this.$store.state.user.token}`
        };
        this.axios
          .patch(`/card/${this.id}/`, card, { headers: headers })
          .then(response => {
            this.$store.dispatch("updateAlter", {
              msg: response.data.msg,
              msgType: "success",
              msgShow: true
            });
            this.$router.push({ name: "Content", params: { cardId: this.id } });
          })
          .catch(error => {
            this.$store.dispatch("updateAlter", {
              msg: "修改失败",
              msgType: "error",
              msgShow: true
            });
          });
      }
    },
    clearData() {
      this.id = null;
      this.title = "";
      this.pic = null;
      this.content = "";
      this.location = "";
      this.date = new Date().toISOString().substr(0, 10);
      this.menu = false;
      this.pichidden = false;
    }
  }
};
</script>

<style>
</style>