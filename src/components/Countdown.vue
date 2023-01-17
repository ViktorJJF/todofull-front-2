<template>
  <div class="timer">
    <span class="timer__part timer__part--minutes">{{ hours }}</span>
    <span class="timer__part">:</span>
    <span class="timer__part timer__part--minutes">{{ minute }}</span>
    <span class="timer__part">:</span>
    <span class="timer__part timer__part--seconds">{{ seconds }}</span>
  </div>
</template>

<script>
import { convertMsToTime } from "@/utils/utils";

export default {
  props: {
    millis: {
      type: Number,
      default: 24 * 60 * 60 * 1000,
    },
  },
  data() {
    return {
      hours: 0,
      minute: 0,
      seconds: 0,
    };
  },
  mounted() {
    console.log("montando timer...");
    this.startTimer();
  },
  methods: {
    startTimer() {
      const millis = this.millis;

      let [hours, minutes, seconds] = convertMsToTime(millis).split(":");
      setInterval(() => {
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        this.hours = hours;
        this.minute = minutes;
        this.seconds = seconds;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.timer {
  font-family: sans-serif;
  display: inline;
  padding: 6px 8px;
  border-radius: 24px;
  background: #f6f6f6;
}

.timer__part {
  font-size: 15px;
  font-weight: bold;
}
</style>