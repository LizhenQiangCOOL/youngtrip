<template>
  <div>
    <v-stepper class="mx-3 mt-5" v-model="e1" :alt-labels="altLabels">
      <template>
        <v-stepper-header>
          <template v-for="n in steps">
            <v-stepper-step
              :key="`${n}-step`"
              :complete="e1 > n"
              :step="n"
              :editable="editable"
            >Step {{ n }}</v-stepper-step>
          </template>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
            <!-- 上传封面图和其他内容数据 -->
            <!-- uploadfile -->
            <v-card elevation="0" v-if="n===1">
              <v-card-title class="d-flex justify-center">增加卡片</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-file-input
                      chips
                      :loading="load"
                      v-model="pic"
                      accept="image/*"
                      show-size
                      label="图片"
                      prepend-icon="mdi-camera"
                      required
                      @change="uploadfile"
                      @click:clear="clickclear"
                    ></v-file-input>
                  </v-col>
                  <v-col cols="12">
                    <v-img :src="picurl" v-show="imgshow"></v-img>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- 其他数据填充 -->
            <v-card v-else　elevation="0" class="mx-3 mt-4">
              <v-card-title class="d-flex justify-center">{{id ? '修改卡片' : '记录卡片'}}</v-card-title>
              <v-card-text>
                <form lazy-validation>
                  <!-- <v-text-field
                    v-model.trim="title"
                    :error-messages="titleErrors"
                    label="标题"
                    :counter="80"
                    required
                    clearable
                    @blur="$v.title.$touch()"
                  ></v-text-field> -->

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

                  <!-- 日期 -->
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
                        label="日期"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                        required
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">取消</v-btn>
                      <v-btn text color="primary" @click="$refs.menu[0].save(date)">确定</v-btn>
                    </v-date-picker>
                  </v-menu>

                  <!-- 时间 -->
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="time"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="time"
                        label="时间"
                        prepend-icon="access_time"
                        readonly
                        v-on="on"
                        required
                      ></v-text-field>
                    </template>
                    <v-time-picker v-if="modal" v-model="time" full-width>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false">取消</v-btn>
                      <v-btn text color="primary" @click="$refs.dialog[0].save(time)">确定</v-btn>
                    </v-time-picker>
                  </v-dialog>
                </form>
              </v-card-text>
            </v-card>

            <v-row v-if="n===1">
              <v-col class="d-flex justify-center">
                <v-btn color="primary" @click="nextStep(n)">下一步</v-btn>
                <v-btn text　@click="cancel">取消</v-btn>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col class="d-flex justify-center">
                <v-btn color="primary" @click="nextStep(n)" v-if="n===2">提交</v-btn>
              </v-col>
            </v-row>
          </v-stepper-content>
        </v-stepper-items>
      </template>
    </v-stepper>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    // title: {
    //   required,
    //   maxLength: maxLength(80)
    // },
    content: { required, maxLength: maxLength(300) },
    location: { required, maxLength: maxLength(50) }
  },

  data() {
    return {
      e1: 1,
      steps: 2,
      altLabels: false,
      editable: true,

      pic: null,
      picurl: "",
      load: false,
      imgshow: false,

      id: null,
      title: "",
      content: "",
      location: "",
      date: "",
      menu: false,

      time: "",
      modal: false,

      datetime: ""
    };
  },
  beforeRouteLeave(to, from, next) {
    this.clearData();
    next();
  },
  created() {
    const cardId = this.$route.params.cardId || null;
    const card = this.$route.params.card || null;

    const trip = this.$store.state.trip
    if(trip.id === null){
      this.$router.back(-1);
      return
    }

    if (cardId !== null) {
      this.id = cardId;
      this.imgshow = true;
      if (card && cardId === card.id) {
        let obj = card;
        this.picurl = obj.pic;
        // this.title = obj.title;
        this.content = obj.content;
        this.location = obj.location;
        this.datetime = obj.date;
        let datetimelist = this.datetime.split(" ");
        this.date = datetimelist[0];
        this.time = datetimelist[1];
      } else {
        this.axios
          .get(`/card/${cardId}/`)
          .then(response => {
            let obj = response.data;
            // this.title = obj.title;
            this.content = obj.content;
            this.location = obj.location;
            this.datetime = obj.date;
            let datetimelist = this.datetime.split(" ");
            this.date = datetimelist[0];
            this.time = datetimelist[1];
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
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
    vertical() {
      this.e1 = 2;
      requestAnimationFrame(() => (this.e1 = 1)); // Workarounds
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
    },
    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) return errors;
      !this.$v.date.required && errors.push("日期必填");
    },
    timeErrors() {
      const errors = [];
      if (!this.$v.time.$dirty) return errors;
      !this.$v.time.required && errors.push("时间必填");
    }
  },
  methods: {
    nextStep(n) {
      if (n === this.steps) {
        //  　最终完成找回面膜然后　跳转登录页面
        this.cardcreate();
        // console.log(this.date, this.time)
        // console.log(this.date+' '+this.time)
      } else {
        this.e1 += 1;
      }
    },
    uploadfile() {
      if (this.pic === undefined) {
        return;
      }
      this.imgshow = true;
      this.load = "info";
      let formData = new FormData();
      formData.append("file", this.pic);
      const headers = {
        Authorization: `jwt ${this.$store.state.user.token}`,
        "Content-Type": "multipart/form-data"
      };
      this.axios
        .post(`/file/`, formData, { headers: headers })
        .then(response => {
          this.picurl = response.data.data;
          this.load = false;
        })
        .catch(error => {
          this.$store.dispatch("updateAlter", {
            msg: "图片上传失败",
            msgType: "error",
            msgShow: true
          });
          this.imgshow = false;
          this.picurl = "";
          this.load = false;
        });
    },
    clickclear() {
      this.imgshow = false;
      this.pic = null;
      this.picurl = "";
      this.load = false;
    },

    cardcreate() {
      this.$v.$touch();
      if (!this.$v.$error && this.picurl !== "") {
        this.$nextTick(() => {
          this.submit();
        });
      }
    },
    submit() {
      this.datetime = this.date + " " + this.time;
      if (this.id === null) {
        let formData = new FormData();
        formData.append("userprofile", this.$store.state.user.userinfo.id);
        formData.append("trip", this.$store.state.trip.id)
        // formData.append("title", this.title);
        formData.append("pic", this.picurl);
        formData.append("content", this.content);
        formData.append("location", this.location);
        formData.append("date", this.datetime);
        const headers = {
          Authorization: `jwt ${this.$store.state.user.token}`,
          "Content-Type": "multipart/form-data"
        };
        this.axios
          .post(`/card/`, formData, { headers: headers })
          .then(response => {
            console.log(response.data.data)
            this.$store.dispatch("updateAlter", {
              msg: response.data.msg,
              msgType: "success",
              msgShow: true
            });

            this.$store.dispatch('updateTripAddCards', response.data.data)
            this.$router.push({
              name: "TripCreate",
              params: { step:2 }
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
          pic: this.picurl,
          // title: this.title,
          content: this.content,
          location: this.location,
          date: this.datetime
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
      this.imgshow = false;
      this.pic = null;
      this.picurl = "";
      this.load = false;

      this.id = null;
      this.title = "";
      this.pic = null;
      this.content = "";
      this.location = "";
      this.date = new Date().toISOString().substr(0, 10);
      this.menu = false;
      this.pichidden = false;
    },

    cancel() {
      if (this.id !== null) {
        this.$router.push({
          name: "Content",
          params: { cardId: this.id }
        });
      } else {
        this.$router.push({
          name: "Home"
        });
      }
    }
  }
};
</script>

<style>
</style>