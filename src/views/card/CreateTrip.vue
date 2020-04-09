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
              <v-card-title class="d-flex justify-center">记录游记</v-card-title>

              <v-card-text>
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
                  chips
                  :loading="load"
                  v-model="pic"
                  accept="image/*"
                  show-size
                  label="封面图"
                  prepend-icon="mdi-camera"
                  required
                  @change="uploadfile"
                  @click:clear="clickclear"
                ></v-file-input>

                <v-img :src="picurl" v-show="imgshow"></v-img>

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
                      label="游记第一天日期"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                      required
                      :error-messages="dateErrors"
                      @blur="$v.date.$touch()"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">取消</v-btn>
                    <v-btn text color="primary" @click="$refs.menu[0].save(date)">确定</v-btn>
                  </v-date-picker>
                </v-menu>

                <v-text-field
                  v-model.trim="location"
                  label="主要地点"
                  required
                  clearable
                  :error-messages="locationErrors"
                  @blur="$v.location.$touch()"
                ></v-text-field>
              </v-card-text>
            </v-card>

            <!-- 其他数据填充 -->
            <v-card v-else　elevation="0" class="mx-3 mt-4">
              <v-card-title class="d-flex justify-center">为游记增加卡片</v-card-title>
              <v-item-group v-model="selected">
                <v-row>
                  <v-col
                    v-for="item in items"
                    :key="item.id"
                    cols="12"
                    md="6"
                    style="cursor:pointer"
                  >
                    <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-item>
                          <v-img :src="item.pic" height="150" class="text-right pa-2">
                            <v-fade-transition>
                              <v-overlay v-if="hover" absolute color="#272727">
                                <v-btn fab @click="editcard(item)" large color="blue" class="mx-1">
                                  <v-icon>mdi-content-save-edit</v-icon>
                                </v-btn>
                                <v-btn fab @click="delcard(item)" large color="blue" class="mx-1">
                                  <v-icon>mdi-delete</v-icon>
                                </v-btn>
                              </v-overlay>
                            </v-fade-transition>
                          </v-img>
                        </v-item>
                      </template>
                    </v-hover>
                  </v-col>

                  <v-col cols="12" md="6" class="d-flex justify-center align-center">
                    <v-btn color="pink" icon height="120" width="120" @click="addcard">
                      <v-icon dark size="120">mdi-plus</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-item-group>
            </v-card>

            <v-row v-if="n===1">
              <v-col class="d-flex justify-center">
                <v-btn color="primary" @click="nextStep(n)">下一步</v-btn>
                <v-btn text　@click="cancel">取消</v-btn>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col class="d-flex justify-center">
                <v-btn color="primary" @click="nextStep(n)" v-if="n===2">完成</v-btn>
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
    title: {
      required,
      maxLength: maxLength(80)
    },
    location: { required, maxLength: maxLength(50) },
    date: { required }
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

      items: [],

      selected: [],

      location: "",
      date: "",
      menu: false,

      overlay: false
    };
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  created() {
    const stepe1 = this.$route.params.step || null;
    if (stepe1 !== null) {
      this.e1 = stepe1;
    }
    const obj = this.$store.state.trip;
    if (obj.id !== null) {
      this.id = obj.id;
      this.title = obj.title;
      this.picurl = obj.picurl;
      this.date = obj.firstday;
      this.location = obj.location;
      this.imgshow = true;
      this.items = obj.cards;
    } else {
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
      this.datetab(this.date, new Date().toLocaleDateString()) === 1 &&
        errors.push("日期必须小于今天");
      return errors;
    }
  },
  methods: {
    nextStep(n) {
      if (n === this.steps) {
        // 完成
        this.activetrip();
      } else {
        // 下一步trip追加卡片
        this.tripcreate();
        if (this.title !== "" && this.picurl !== "") {
          this.e1 += 1;
        }
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

    cancel() {
      if (this.id !== null) {
        this.deltrip();
      }
      this.clearData();
      this.$router.push({
        name: "Home"
      });
    },

    tripcreate() {
      this.$v.$touch();
      if (!this.$v.$error && this.picurl !== "") {
        this.$nextTick(() => {
          this.submitnext();
        });
      }
    },
    submitnext() {
      if (this.id === null) {
        const trip = {
          pic: this.picurl,
          title: this.title,
          firstday: this.date,
          location: this.location
        };
        const headers = {
          Authorization: `jwt ${this.$store.state.user.token}`
        };
        this.axios
          .post(`/trip/`, trip, { headers: headers })
          .then(response => {
            const obj = response.data.data;
            this.id = obj.id;

            const trip = {
              id: this.id,
              title: this.title,
              picurl: this.picurl,
              firstday: this.date,
              location: this.location
            };
            this.$store.dispatch("updateTrip", trip);
          })
          .catch(error => {
            this.$store.dispatch("updateAlter", {
              msg: "网络异常",
              msgType: "error",
              msgShow: true
            });
          });
      } else {
        const trip = {
          pic: this.picurl,
          title: this.title,
          firstday: this.date,
          location: this.location
        };
        const headers = {
          Authorization: `jwt ${this.$store.state.user.token}`
        };
        this.axios
          .patch(`/trip/${this.id}/`, trip, { headers: headers })
          .then(response => {
            const trip = {
              id: this.id,
              title: this.title,
              picurl: this.picurl,
              firstday: this.date,
              location: this.location
            };
            this.$store.dispatch("updateTrip", trip);
          })
          .catch(error => {
            this.$store.dispatch("updateAlter", {
              msg: "网络异常",
              msgType: "error",
              msgShow: true
            });
          });
      }
    },
    addcard() {
      if (this.id === null || this.$store.state.trip.id === null) {
        this.$store.dispatch("updateAlter", {
          msg: "请先完成第一步创建游记",
          msgType: "info",
          msgShow: true
        });
      } else {
        this.$router.push("/cards/create");
      }
    },
    activetrip() {
      const trip = {
        status: "1"
      };
      const headers = {
        Authorization: `jwt ${this.$store.state.user.token}`
      };
      this.axios
        .patch(`/trip/${this.id}/`, trip, { headers: headers })
        .then(response => {
          this.clearData();
          this.$store.dispatch("updateAlter", {
            msg: "创建游记成功",
            msgType: "success",
            msgShow: true
          });
          // 跳转展示页面
          this.$router.push({ name: "Trip", params: { tripId: this.id } });
        })
        .catch(error => {
          this.$store.dispatch("updateAlter", {
            msg: "网络异常",
            msgType: "error",
            msgShow: true
          });
        });
    },

    clearData() {
      //清除store中trip数据
      this.$store.dispatch("clearTrip");

      this.pic = null;
      this.picurl = "";
      this.load = false;
      this.imgshow = false;
      this.id = null;
      this.title = "";
      this.items = [];
      this.selected = [];
    },
    deltrip() {
      const tripId = this.id;
      const headers = {
        Authorization: `jwt ${this.$store.state.user.token}`
      };
      this.axios
        .delete(`/trip/${tripId}/`, { headers: headers })
        .then(response => {
          this.$store.dispatch("updateAlter", {
            msg: response.data.msg,
            msgType: "success",
            msgShow: true
          });
          this.$router.push({
            name: "Home"
          });
        })
        .catch(error => {
          this.$store.dispatch("updateAlter", {
            msg: "网络异常,删除失败",
            msgType: "error",
            msgShow: true
          });
        });
    },

    datetab(date1, date2) {
      var oDate1 = new Date(date1);
      var oDate2 = new Date(date2);
      if (oDate1.getTime() > oDate2.getTime()) {
        return 1;
      } else if (oDate1.getTime() == oDate2.getTime()) {
        return 0;
      } else {
        return -1;
      }
    },

    editcard(item) {
       this.$router.push({
        name: "Edit",
        params: { cardId: item.id, flag : true}
      });

    },
    delcard(item) {
      const cardId = item.id;
      const headers = {
        Authorization: `jwt ${this.$store.state.user.token}`
      };
      this.axios
        .delete(`/card/${cardId}/`, { headers: headers })
        .then(response => {
          this.items = this.items.filter(el => el.id != item.id);
          const trip = {
            cards: this.items
          };
          this.$store.dispatch("updateTrip", trip);
        })
        .catch(error => {
          this.$store.dispatch("updateAlter", {
            msg: "网络异常,删除失败",
            msgType: "error",
            msgShow: true
          });
        });
    }
  }
};
</script>

<style>
</style>