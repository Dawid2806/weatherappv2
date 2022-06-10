import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/pl";

export const IsDay = () => {
  dayjs.extend(isoWeek);

  let tomorrowDay;
  let afterTomorrowDay;
  let nextAfterTomorrowDay;

  if (dayjs().isoWeekday() + 1 === 0) {
    tomorrowDay = "Nie";
    return;
  } else if (dayjs().isoWeekday() + 1 === 1) {
    tomorrowDay = "Pon";
    return;
  } else if (dayjs().isoWeekday() + 1 === 2) {
    tomorrowDay = "Wto";
  } else if (dayjs().isoWeekday() + 1 === 3) {
    tomorrowDay = "Śro";
  } else if (dayjs().isoWeekday() + 1 === 4) {
    tomorrowDay = "Czw";
  } else if (dayjs().isoWeekday() + 1 === 5) {
    tomorrowDay = "Pią";
  } else if (dayjs().isoWeekday() + 1 === 6) {
    tomorrowDay = "Sob";
  }
  if (dayjs().isoWeekday() + 2 === 0) {
    afterTomorrowDay = "Nie";
    return;
  } else if (dayjs().isoWeekday() + 2 === 1) {
    afterTomorrowDay = "Pon";
    return;
  } else if (dayjs().isoWeekday() + 2 === 2) {
    afterTomorrowDay = "Wto";
  } else if (dayjs().isoWeekday() + 2 === 3) {
    afterTomorrowDay = "Śro";
  } else if (dayjs().isoWeekday() + 2 === 4) {
    afterTomorrowDay = "Czw";
  } else if (dayjs().isoWeekday() + 2 === 5) {
    afterTomorrowDay = "Pią";
  } else if (dayjs().isoWeekday() + 2 === 6) {
    afterTomorrowDay = "Sob";
  }
  if (dayjs().isoWeekday() + 3 === 0) {
    nextAfterTomorrowDay = "Nie";
    return;
  } else if (dayjs().isoWeekday() + 3 === 1) {
    nextAfterTomorrowDay = "Pon";
    return;
  } else if (dayjs().isoWeekday() + 3 === 2) {
    nextAfterTomorrowDay = "Wto";
  } else if (dayjs().isoWeekday() + 3 === 3) {
    nextAfterTomorrowDay = "Śro";
  } else if (dayjs().isoWeekday() + 3 === 4) {
    nextAfterTomorrowDay = "Czw";
  } else if (dayjs().isoWeekday() + 3 === 5) {
    nextAfterTomorrowDay = "Pią";
  } else if (dayjs().isoWeekday() + 3 === 6) {
    nextAfterTomorrowDay = "Sob";
  }
  return { afterTomorrowDay, tomorrowDay, nextAfterTomorrowDay };
};
