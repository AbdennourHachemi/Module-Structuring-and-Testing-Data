import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can corectly convert midnight", () =>
  assert.equal(formatAs12HourClock("00:00"), "12:00 am"));

test("can corectly convert mid-day", () =>
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm"));

test("can corectly convert half an hour passed midnight", () =>
  assert.equal(formatAs12HourClock("00:30"), "00:30 am"));

test("can correctly convert time with missing leading zero", function () {
  assert.equal(formatAs12HourClock("9:00"), "09:00 am");
});

test("can correctly handel non digit format entries", function () {
  assert.equal(formatAs12HourClock("nineOclock"), "Inccorect timing format");
});
/* ************************       Edge cases  Minutes     *****************************************************/
/*   over one hour <- 60                         30                                       0 -> negative number  */
/*   <----------------|---------------------------|---------------------------------------|-------------------> */
/* **************************************************************************************************************/

/* ************************       Edge cases  Hours     *****************************************************/
/*   over one day <- 24                          12                                       0 -> negative number  */
/*   <----------------|---------------------------|---------------------------------------|-------------------> */
/* **************************************************************************************************************/

/*--------------------------------------------|
  |        Hours      |     Minures           | 
  |         00        |        00             |
  |___________________|___________________ ___|
            
 */
