const lessons = {
  basics: {
    title: "Arduino ຄິດແນວໃດ?",
    body: `<p>ໂປຣແກຣມ Arduino ມີ 2 ສ່ວນຫຼັກ: <strong>setup()</strong> ເຮັດຄັ້ງດຽວເມື່ອເປີດເຄື່ອງ ແລະ <strong>loop()</strong> ເຮັດຊ້ຳໄປເລື້ອຍໆ.</p><h4>3 ຂັ້ນທີ່ຕ້ອງຄິດ</h4><ol><li><strong>Input:</strong> sensor ສົ່ງຄ່າຫຍັງເຂົ້າມາ?</li><li><strong>Process:</strong> Arduino ຄຳນວນ ຫຼືປຽບທຽບແນວໃດ?</li><li><strong>Output:</strong> ຈະສະແດງຜົນ ຫຼືສັ່ງອຸປະກອນໃດ?</li></ol><p class="formula">INPUT → PROCESS → OUTPUT</p>`,
    tip: `<strong>ຈຸດອອກສອບ</strong><ul><li>pinMode() ກຳນົດ INPUT/OUTPUT</li><li>digitalRead() ໄດ້ HIGH/LOW</li><li>analogRead() ໃນ Uno ໄດ້ 0–1023</li><li>delay(1000) = ຢຸດ 1 ວິນາທີ</li></ul>`
  },
  tmp36: {
    title: "TMP36: ອຸນຫະພູມແບບ Analog",
    body: `<p>TMP36 ສົ່ງແຮງດັນອອກຕາມອຸນຫະພູມ. Arduino Uno ອ່ານຄ່າ 10-bit ຈາກ 0–1023, ຈຶ່ງຕ້ອງແປຄ່າເປັນ volt ແລ້ວເປັນ °C.</p><p class="formula">voltage = raw × (5.0 / 1023.0)<br>°C = (voltage − 0.5) × 100</p><h4>ເປັນຫຍັງລົບ 0.5?</h4><p>ເພາະ TMP36 ມີ offset 500 mV ທີ່ 0°C ແລະເພີ່ມປະມານ 10 mV ຕໍ່ 1°C. ບໍ່ຕ້ອງໃຊ້ library; code ສັ້ນ ແລະເໝາະກັບ Tinkercad.</p>`,
    tip: `<strong>ການຕໍ່ (ຫັນດ້ານແປໃສ່ເຮົາ)</strong><ul><li>ຊ້າຍ → 5V</li><li>ກາງ → A0</li><li>ຂວາ → GND</li></ul><small>ກວດ pinout ຂອງອຸປະກອນຈິງສະເໝີ.</small>`
  },
  sensors: {
    title: "ຢ່າສັບສົນ sensor 3 ຊະນິດ",
    body: `<p><strong>TMP36</strong> ວັດອຸນຫະພູມຢ່າງດຽວ. <strong>DHT11</strong> ວັດອຸນຫະພູມ ແລະຄວາມຊຸ່ມສຳພັດໃນອາກາດ. <strong>Soil moisture</strong> ວັດຄວາມຊຸ່ມຂອງດິນ.</p><h4>Library ຈຳເປັນບໍ?</h4><p>TMP36 ແລະ soil moisture ແບບ analog ອ່ານດ້ວຍ analogRead() ໄດ້ໂດຍກົງ. DHT11 ໃຊ້ສັນຍານ digital ທີ່ມີ timing ສະເພາະ, ຈຶ່ງແນະນຳ library ເພື່ອໃຫ້ code ສັ້ນ ແລະເຊື່ອຖືໄດ້.</p>`,
    tip: `<strong>ຖາມຕົນເອງ 2 ຂໍ້</strong><ul><li>ຕ້ອງການວັດ “ອາກາດ” ຫຼື “ດິນ”?</li><li>ອຸປະກອນສົ່ງຄ່າ analog ຫຼື digital?</li></ul>`
  },
  pir: {
    title: "PIR: ກວດຈັບການເຄື່ອນໄຫວ",
    body: `<p>PIR ຫຍໍ້ມາຈາກ <strong>Passive Infrared</strong>. “Passive” ໝາຍເຖິງມັນບໍ່ໄດ້ຍິງລັງສີອອກ; ມັນກວດການປ່ຽນແປງລັງສີ infrared ຈາກຮ່າງກາຍອຸ່ນທີ່ເຄື່ອນຜ່ານ.</p><p class="formula">digitalRead(PIR_PIN) → HIGH = ກວດພົບ</p><p>PIR ບໍ່ໄດ້ບອກລະຍະຫ່າງ ແລະບໍ່ໄດ້ຮັບຮູ້ວ່າວັດຖຸແມ່ນຫຍັງ. ມັນພຽງບອກວ່າມີການປ່ຽນແປງຄວາມຮ້ອນໃນພື້ນທີ່ກວດ.</p>`,
    tip: `<strong>ຄວນຮູ້</strong><ul><li>VCC → 5V</li><li>OUT → digital pin</li><li>GND → GND</li><li>ລໍຖ້າ sensor ປັບຕົວຫຼັງເປີດ</li></ul>`
  },
  ir: {
    title: "IR Remote ກັບ IRremote v4",
    body: `<p>Remote ສົ່ງແສງ infrared ທີ່ກະພິບເປັນລະຫັດ. IR receiver ຮັບສັນຍານ ແລະ library ຊ່ວຍຖອດ protocol, address ແລະ command.</p><p class="formula">#include &lt;IRremote.hpp&gt;<br>IrReceiver.begin(pin, ENABLE_LED_FEEDBACK);<br>IrReceiver.decode() → decodedIRData.command</p><p>ຫຼັງອ່ານແຕ່ລະຄັ້ງຕ້ອງຮຽກ <strong>IrReceiver.resume()</strong> ເພື່ອພ້ອມຮັບຄ່າຖັດໄປ. ຄ່າ command ຂອງ remote ແຕ່ລະລຸ້ນອາດບໍ່ຄືກັນ.</p>`,
    tip: `<strong>v4 ກັບ code ເກົ່າ</strong><ul><li>ໃຊ້ IRremote.hpp</li><li>ໃຊ້ IrReceiver object</li><li>ອ່ານ decodedIRData.command</li><li>ຢ່າຄາດເດົາລະຫັດ—ພິມອອກ Serial ກ່ອນ</li></ul>`
  },
  ultrasonic: {
    title: "HC-SR04: ວັດລະຍະດ້ວຍສຽງ",
    body: `<p>HC-SR04 ສົ່ງຄື້ນ ultrasonic ອອກຈາກ TRIG ແລ້ວວັດເວລາທີ່ສຽງສະທ້ອນກັບມາທາງ ECHO.</p><ol><li>ສົ່ງ pulse HIGH 10 µs ທີ່ TRIG</li><li>ໃຊ້ pulseIn(ECHO, HIGH) ວັດເວລາ</li><li>ຄູນຄວາມໄວສຽງ 0.0343 cm/µs</li><li>ຫານ 2 ເພາະເວລາແມ່ນໄປແລະກັບ</li></ol><p class="formula">distanceCm = duration × 0.0343 / 2</p>`,
    tip: `<strong>4 pin</strong><ul><li>VCC → 5V</li><li>TRIG → OUTPUT</li><li>ECHO → INPUT</li><li>GND → GND</li></ul>`
  },
  serial: {
    title: "Serial Monitor: ໜ້າຕ່າງເບິ່ງຄ່າ",
    body: `<p><strong>Serial.begin(9600)</strong> ເລີ່ມການສື່ສານທີ່ 9600 baud. ຄ່າ baud ໃນ code ແລະ Serial Monitor ຕ້ອງກົງກັນ.</p><p><strong>Serial.print()</strong> ພິມແລ້ວຢູ່ແຖວເກົ່າ; <strong>Serial.println()</strong> ພິມແລ້ວຂຶ້ນແຖວໃໝ່. ໃຊ້ພິມ raw value ກ່ອນຄຳນວນເພື່ອຫາບັນຫາໄດ້ໄວ.</p><p class="formula">Serial.print("Temperature: ");<br>Serial.println(tempC);</p>`,
    tip: `<strong>Debug checklist</strong><ul><li>baud rate ກົງກັນ?</li><li>GND ຕໍ່ຮ່ວມກັນ?</li><li>pin ໃນ code ກົງວົງຈອນ?</li><li>ເລືອກ board/port ຖືກ?</li></ul>`
  }
};

const codeExamples = [
  {badge:"BASIC",title:"Blink LED",note:"ເຂົ້າໃຈ OUTPUT, HIGH/LOW ແລະ loop()",code:`const int LED_PIN = 13;

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(1000);
  digitalWrite(LED_PIN, LOW);
  delay(1000);
}`,explain:"<strong>ແນວຄິດ:</strong> setup() ກຳນົດ pin ຄັ້ງດຽວ; loop() ເປີດ 1 ວິນາທີ ແລະປິດ 1 ວິນາທີຊ້ຳໄປ."},
  {badge:"ANALOG",title:"TMP36 → Serial Monitor",note:"ບໍ່ຕ້ອງໃຊ້ library",code:`const int TEMP_PIN = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int raw = analogRead(TEMP_PIN);
  float voltage = raw * (5.0 / 1023.0);
  float tempC = (voltage - 0.5) * 100.0;

  Serial.print("Temperature: ");
  Serial.print(tempC);
  Serial.println(" C");
  delay(1000);
}`,explain:"<strong>ລຳດັບ:</strong> raw 0–1023 → voltage 0–5V → ລົບ offset 0.5V → ຄູນ 100 ເປັນ °C. ຖ້າ board ໃຊ້ reference ບໍ່ແມ່ນ 5V ຕ້ອງປ່ຽນສູດ."},
  {badge:"ANALOG",title:"Soil moisture → Serial",note:"ຄ່າຫຼາຍ/ໜ້ອຍອາດກັບກັນຕາມ module; ຕ້ອງ calibrate",code:`const int SOIL_PIN = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int raw = analogRead(SOIL_PIN);
  Serial.print("Soil raw: ");
  Serial.println(raw);

  if (raw > 700) {
    Serial.println("Check: soil may be dry");
  }
  delay(1000);
}`,explain:"<strong>ສຳຄັນ:</strong> 700 ເປັນພຽງຕົວຢ່າງ. ຈົດຄ່າຕອນ sensor ແຫ້ງ ແລະຕອນຢູ່ໃນດິນຊຸ່ມເພື່ອຕັ້ງ threshold ຂອງຕົນເອງ."},
  {badge:"DIGITAL",title:"PIR → Serial Monitor",note:"HIGH ເມື່ອກວດພົບການເຄື່ອນໄຫວ",code:`const int PIR_PIN = 2;

void setup() {
  pinMode(PIR_PIN, INPUT);
  Serial.begin(9600);
}

void loop() {
  int motion = digitalRead(PIR_PIN);

  if (motion == HIGH) {
    Serial.println("Motion detected!");
  } else {
    Serial.println("No motion");
  }
  delay(300);
}`,explain:"<strong>ຈື່:</strong> PIR ໃຫ້ຄ່າ digital HIGH/LOW. ຫຼັງເປີດວົງຈອນອາດຕ້ອງລໍຖ້າ sensor ປັບຕົວ."},
  {badge:"LIBRARY v4",title:"IR remote → LED",note:"ໃຊ້ Arduino-IRremote v4; ປ່ຽນ 0x45 ເປັນ command ຂອງ remote ຈິງ",code:`#include <IRremote.hpp>

const int IR_PIN = 2;
const int LED_PIN = 13;
bool ledOn = false;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
  IrReceiver.begin(IR_PIN, ENABLE_LED_FEEDBACK);
}

void loop() {
  if (IrReceiver.decode()) {
    uint16_t command = IrReceiver.decodedIRData.command;
    Serial.println(command, HEX);

    if (command == 0x45) {
      ledOn = !ledOn;
      digitalWrite(LED_PIN, ledOn);
    }
    IrReceiver.resume();
  }
}`,explain:"<strong>ຂັ້ນທຳອິດ:</strong> upload code ແລ້ວເບິ່ງ command ໃນ Serial Monitor. ນຳຄ່າປຸ່ມທີ່ຕ້ອງການມາແທນ 0x45. resume() ເຮັດໃຫ້ receiver ຮັບຄ່າຕໍ່."},
  {badge:"TIME OF FLIGHT",title:"HC-SR04 → ລະຍະ cm",note:"pulseIn() ວັດເວລາ echo ໄປ-ກັບ",code:`const int TRIG_PIN = 9;
const int ECHO_PIN = 10;

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH, 30000);
  float distanceCm = duration * 0.0343 / 2.0;

  if (duration == 0) Serial.println("No echo");
  else {
    Serial.print("Distance: ");
    Serial.print(distanceCm);
    Serial.println(" cm");
  }
  delay(250);
}`,explain:"<strong>ເປັນຫຍັງ /2?</strong> duration ລວມເວລາສຽງເດີນທາງໄປຫາວັດຖຸ ແລະສະທ້ອນກັບ. timeout 30000 µs ປ້ອງກັນການລໍຖ້າດົນເມື່ອບໍ່ມີ echo."}
];

const flashcards = [
  ["setup() ແລະ loop() ຕ່າງກັນແນວໃດ?","setup() ເຮັດຄັ້ງດຽວ; loop() ເຮັດຊ້ຳ."],
  ["analogRead() ໃນ Arduino Uno ໄດ້ຄ່າຊ່ວງໃດ?","0 ຫາ 1023 (10-bit)."],
  ["TMP36 ວັດຄວາມຊຸ່ມໄດ້ບໍ?","ບໍ່ໄດ້. ມັນວັດອຸນຫະພູມ."],
  ["DHT11 ວັດຄວາມຊຸ່ມຫຍັງ?","ຄວາມຊຸ່ມສຳພັດໃນອາກາດ."],
  ["PIR ຫຍໍ້ມາຈາກຫຍັງ?","Passive Infrared."],
  ["IRremote v4 ອ່ານປຸ່ມຈາກ field ໃດ?","IrReceiver.decodedIRData.command"],
  ["ເປັນຫຍັງຕ້ອງ IrReceiver.resume()?","ເພື່ອໃຫ້ receiver ພ້ອມຮັບຂໍ້ມູນຊຸດຖັດໄປ."],
  ["HC-SR04 ໃຊ້ TRIG ແລະ ECHO ເຮັດຫຍັງ?","TRIG ສັ່ງສົ່ງຄື້ນ; ECHO ບອກເວລາສະທ້ອນກັບ."],
  ["ສູດ distance ເປັນຫຍັງຕ້ອງຫານ 2?","ເພາະສຽງເດີນທາງໄປ ແລະກັບ."],
  ["Serial ເປັນຕົວໜັງສືມົ່ວ ຄວນກວດຫຍັງ?","ກວດໃຫ້ baud rate ໃນ code ແລະ Serial Monitor ກົງກັນ."]
];

const questions = [
  ["ພື້ນຖານ","ຟັງຊັນ setup() ເຮັດວຽກເມື່ອໃດ?",["ເຮັດຊ້ຳຕະຫຼອດ","ເຮັດຄັ້ງດຽວເມື່ອເລີ່ມ/ຣີເຊັດ","ເມື່ອກົດ Serial Monitor","ສະເພາະເມື່ອ sensor HIGH"],1,"setup() ໃຊ້ຕັ້ງຄ່າເລີ່ມຕົ້ນ ແລະເຮັດໜຶ່ງຄັ້ງ."],
  ["ພື້ນຖານ","ຟັງຊັນ loop() ເຮັດວຽກແນວໃດ?",["ເຮັດຄັ້ງດຽວ","ເຮັດຊ້ຳຈົນປິດ/ຣີເຊັດ","ເຮັດສະເພາະຕອນ upload","ບໍ່ເຮັດຖ້າບໍ່ມີ library"],1,"loop() ແມ່ນວົງຈອນຫຼັກທີ່ Arduino ເຮັດຊ້ຳ."],
  ["ພື້ນຖານ","pinMode(8, OUTPUT) ໝາຍເຖິງຫຍັງ?",["ອ່ານ analog ທີ່ pin 8","ຕັ້ງ pin 8 ເປັນຂາສົ່ງອອກ","ເປີດ pin 8 ເປັນ HIGH","ປິດ pin 8"],1,"pinMode ກຳນົດທິດທາງຂອງ pin; OUTPUT ແມ່ນຂາອອກ."],
  ["ພື້ນຖານ","digitalRead() ສົ່ງຄ່າຫຍັງ?",["0–1023","Volt ໂດຍກົງ","HIGH ຫຼື LOW","ອຸນຫະພູມ"],2,"Digital input ມີ 2 ສະຖານະ: HIGH ແລະ LOW."],
  ["ພື້ນຖານ","analogRead() ໃນ Arduino Uno ທົ່ວໄປສົ່ງຄ່າຊ່ວງໃດ?",["0–1","0–255","0–1023","0–5000"],2,"ADC 10-bit ຂອງ Uno ມີ 1024 ລະດັບ: 0–1023."],
  ["ພື້ນຖານ","delay(1000) ໃຫ້ Arduino ລໍຖ້າດົນປານໃດ?",["1 µs","1 ms","100 ms","1 ວິນາທີ"],3,"delay() ໃຊ້ millisecond; 1000 ms = 1 ວິນາທີ."],
  ["ພື້ນຖານ","ຄຳສັ່ງໃດເຮັດໃຫ້ LED ທີ່ pin 13 ຕິດ?",["digitalRead(13)","digitalWrite(13, HIGH)","analogRead(13)","pinMode(13, INPUT)"],1,"ສົ່ງ HIGH ອອກ pin ທີ່ຕັ້ງເປັນ OUTPUT."],
  ["ພື້ນຖານ","ໃນແນວຄິດ Input → Process → Output, sensor ຢູ່ສ່ວນໃດ?",["Input","Process","Output","Power"],0,"Sensor ນຳຂໍ້ມູນຈາກໂລກຈິງເຂົ້າ Arduino."],
  ["ພື້ນຖານ","ເປັນຫຍັງອຸປະກອນໃນວົງຈອນຄວນຕໍ່ GND ຮ່ວມກັນ?",["ເພື່ອໃຫ້ມີຈຸດອ້າງອີງແຮງດັນດຽວກັນ","ເພື່ອເພີ່ມ baud rate","ເພື່ອໃຫ້ code ສັ້ນ","ເພື່ອແທນ library"],0,"ສັນຍານຈະອ່ານໄດ້ຖືກເມື່ອມີ ground reference ຮ່ວມ."],
  ["ພື້ນຖານ","ຊື່ຕົວແປ const int PIR_PIN = 2; ມີປະໂຫຍດຫຍັງ?",["ເຮັດໃຫ້ pin ສົ່ງ analog","ອ່ານງ່າຍ ແລະປ່ຽນ pin ບ່ອນດຽວ","ເພີ່ມໄຟ 2V","ບັງຄັບ sensor HIGH"],1,"ຊື່ທີ່ຊັດຊ່ວຍໃຫ້ code ອ່ານ ແລະແກ້ໄຂງ່າຍ."],
  ["TMP36 / ຄວາມຊຸ່ມ","TMP36 ວັດຄ່າຫຍັງ?",["ຄວາມຊຸ່ມດິນ","ຄວາມຊຸ່ມອາກາດ","ອຸນຫະພູມ","ລະຍະຫ່າງ"],2,"TMP36 ເປັນ analog temperature sensor."],
  ["TMP36 / ຄວາມຊຸ່ມ","TMP36 ຈຳເປັນຕ້ອງໃຊ້ library ບໍ?",["ຈຳເປັນສະເໝີ","ບໍ່ຈຳເປັນ; ໃຊ້ analogRead() ໄດ້","ໃຊ້ IRremote","ໃຊ້ສະເພາະໃນ Serial Monitor"],1,"TMP36 ສົ່ງ analog voltage ທີ່ອ່ານໄດ້ໂດຍກົງ."],
  ["TMP36 / ຄວາມຊຸ່ມ","ສູດ voltage ສຳລັບ Uno 5V ຂໍ້ໃດຖືກ?",["raw × 5.0 / 1023.0","raw × 1023 / 5","raw − 500","raw / 100"],0,"ແປ 1023 ລະດັບ ADC ໄປຫາ reference 5V."],
  ["TMP36 / ຄວາມຊຸ່ມ","ສູດ TMP36 ເປັນ °C ຈາກ voltage ຂໍ້ໃດຖືກ?",["voltage × 10","(voltage − 0.5) × 100","voltage / 2","(voltage + 0.5) × 10"],1,"TMP36 ມີ 0.5V offset ແລະ 10mV/°C."],
  ["TMP36 / ຄວາມຊຸ່ມ","ຖ້າ TMP36 ສົ່ງ 0.75V, ອຸນຫະພູມປະມານເທົ່າໃດ?",["7.5°C","25°C","50°C","75°C"],1,"(0.75 − 0.5) × 100 = 25°C."],
  ["TMP36 / ຄວາມຊຸ່ມ","DHT11 ວັດຄ່າໃດ?",["ອຸນຫະພູມ ແລະຄວາມຊຸ່ມອາກາດ","ຄວາມຊຸ່ມດິນຢ່າງດຽວ","ລະຍະ ແລະສຽງ","ແສງ IR"],0,"DHT11 ເປັນ digital temperature and humidity sensor."],
  ["TMP36 / ຄວາມຊຸ່ມ","ເປັນຫຍັງຈຶ່ງແນະນຳ library ສຳລັບ DHT11?",["ເພາະມັນໃຊ້ timing digital ສະເພາະ","ເພາະ analogRead() ບໍ່ມີໃນ Arduino","ເພາະ library ເພີ່ມໄຟລ້ຽງ","ເພາະມັນວັດດິນ"],0,"Library ຈັດການ protocol/timing ໃຫ້ code ງ່າຍ ແລະເຊື່ອຖືໄດ້."],
  ["TMP36 / ຄວາມຊຸ່ມ","Soil moisture sensor ມີໜ້າທີ່ຫຍັງ?",["ວັດອຸນຫະພູມ CPU","ວັດຄວາມຊຸ່ມໃນດິນ","ກວດການເຄື່ອນໄຫວ","ຮັບ remote"],1,"ຊື່ soil ຊີ້ວ່າໃຊ້ກັບດິນ."],
  ["TMP36 / ຄວາມຊຸ່ມ","ເປັນຫຍັງຄ່າ threshold ຂອງ soil sensor ບໍ່ຄວນຄັດລອກຕາຍຕົວ?",["ເພາະຄ່າຂຶ້ນກັບ sensor ແລະດິນ ຈຶ່ງຕ້ອງ calibrate","ເພາະ Arduino ອ່ານໄດ້ແຕ່ HIGH","ເພາະ Serial ບໍ່ຮອງຮັບຕົວເລກ","ເພາະ TMP36 ຄວບຄຸມຄ່ານັ້ນ"],0,"ຄວນວັດຄ່າແຫ້ງ/ຊຸ່ມຈາກອຸປະກອນຈິງແລ້ວຕັ້ງ threshold."],
  ["TMP36 / ຄວາມຊຸ່ມ","ຂາສັນຍານຂອງ TMP36 ຄວນຕໍ່ກັບ pin ປະເພດໃດ?",["Analog input ເຊັ່ນ A0","Digital output ເທົ່ານັ້ນ","TRIG","TX ເທົ່ານັ້ນ"],0,"TMP36 ສົ່ງ analog voltage ຈຶ່ງຕໍ່ analog input."],
  ["PIR","PIR ຫຍໍ້ມາຈາກຫຍັງ?",["Pulse Infrared Reader","Passive Infrared","Personal Input Relay","Proximity Internal Radar"],1,"PIR = Passive Infrared."],
  ["PIR","ຄຳວ່າ Passive ໃນ PIR ໝາຍເຖິງຫຍັງ?",["Sensor ບໍ່ຕ້ອງໃຊ້ໄຟ","Sensor ບໍ່ໄດ້ຍິງ IR ອອກໄປ","Sensor ບໍ່ມີ output","Sensor ວັດໄດ້ແຕ່ກາງຄືນ"],1,"PIR ຮັບຮູ້ການປ່ຽນ IR ຈາກພາຍນອກ; ບໍ່ໄດ້ສົ່ງ IR ເອງ."],
  ["PIR","PIR ທົ່ວໄປກວດຫຍັງ?",["ລະດັບນ້ຳ","ການປ່ຽນແປງ infrared ຈາກວັດຖຸອຸ່ນທີ່ເຄື່ອນ","ລະຫັດ remote","ອຸນຫະພູມເປັນ °C ໂດຍກົງ"],1,"PIR ເໝາະກັບການກວດ movement/presence change ຂອງຄົນ ຫຼືສັດອຸ່ນ."],
  ["PIR","ຄ່າ output ພື້ນຖານຂອງ PIR ແມ່ນແບບໃດ?",["Digital HIGH/LOW","Analog °C","Text","I2C address ເທົ່ານັ້ນ"],0,"PIR module ພື້ນຖານສົ່ງ digital signal."],
  ["PIR","ຄຳສັ່ງໃດເໝາະກັບການອ່ານ PIR?",["analogWrite()","digitalRead()","Serial.write()","tone()"],1,"ອ່ານ HIGH/LOW ຈາກ digital pin ດ້ວຍ digitalRead()."],
  ["PIR","ເມື່ອ PIR output ເປັນ HIGH ທົ່ວໄປໝາຍເຖິງຫຍັງ?",["ກວດພົບການເຄື່ອນໄຫວ","ບໍ່ມີໄຟ","ອຸນຫະພູມ 100°C","remote ສົ່ງປຸ່ມ 1"],0,"HIGH ຄືສັນຍານກວດພົບຂອງ module ທົ່ວໄປ."],
  ["PIR","PIR ບອກລະຍະຫ່າງເປັນ cm ໄດ້ບໍ?",["ໄດ້ແມ່ນຍຳດ້ວຍ pulseIn()","ບໍ່ໄດ້; ມັນກວດການປ່ຽນແປງ/ເຄື່ອນໄຫວ","ໄດ້ຖ້າບໍ່ໃຊ້ library","ໄດ້ສະເພາະໃນ Tinkercad"],1,"ຕ້ອງໃຊ້ sensor ວັດລະຍະເຊັ່ນ HC-SR04 ຖ້າຕ້ອງການ cm."],
  ["PIR","ຫຼັງເປີດ PIR ໃໝ່ໆ ຄວນເຮັດຫຍັງ?",["ລໍຖ້າໃຫ້ sensor ປັບຕົວ","ປ່ຽນ A0 ເປັນ 12V","ຖອດ GND","ລຶບ setup()"],0,"PIR ຈຳນວນຫຼາຍຕ້ອງໃຊ້ເວລາ warm-up/calibration."],
  ["IR Remote","Remote IR ສົ່ງຂໍ້ມູນດ້ວຍຫຍັງ?",["ສຽງ ultrasonic","ແສງ infrared ທີ່ຖືກ modulate","ຄວາມຊຸ່ມ","ສາຍ USB ເທົ່ານັ້ນ"],1,"Remote ໃຊ້ LED infrared ສົ່ງລະຫັດທາງແສງ."],
  ["IR Remote","Header ທີ່ໃຊ້ໃນ Arduino-IRremote v4 ແມ່ນຂໍ້ໃດ?",["#include <IRremote.hpp>","#include <TMP36.h>","#include <Ultrasonic.txt>","#include <Serial.hpp>"],0,"v4 ໃຊ້ IRremote.hpp ຕາມຕົວຢ່າງປັດຈຸບັນ."],
  ["IR Remote","ຄຳສັ່ງໃດເລີ່ມ IR receiver ໃນ v4?",["IrReceiver.begin(IR_PIN, ENABLE_LED_FEEDBACK)","IR.start(A0)","analogRead(IR_PIN)","Serial.receive(IR_PIN)"],0,"IrReceiver.begin() ຕັ້ງຄ່າ receiver ໃນ IRremote v4."],
  ["IR Remote","ຄຳສັ່ງໃດກວດວ່າຮັບ frame ແລະ decode ສຳເລັດ?",["IrReceiver.decode()","IrReceiver.stop()","digitalWrite()","pulseIn()"],0,"decode() ຄືຈຸດກວດການຮັບຂໍ້ມູນ."],
  ["IR Remote","ໃນ IRremote v4 ຄ່າປຸ່ມທີ່ decode ແລ້ວອ່ານຈາກໃສ?",["IrReceiver.decodedIRData.command","Serial.command","analogRead(REMOTE)","IrReceiver.temperature"],0,"decodedIRData.command ເກັບ command ຂອງ frame ທີ່ຮັບ."],
  ["IR Remote","IrReceiver.resume() ໃຊ້ເຮັດຫຍັງ?",["ພ້ອມຮັບ frame ຖັດໄປ","ຢຸດ Arduino ຖາວອນ","ແປ °F ເປັນ °C","ເປີດ ultrasonic"],0,"ຫຼັງຈັດການ frame ແລ້ວ resume() ປ່ອຍ receiver ໃຫ້ຮັບຕໍ່."],
  ["IR Remote","ຄ່າ command ຂອງປຸ່ມ Power ຄືກັນໃນ remote ທຸກອັນບໍ?",["ຄືກັນທັງໝົດ","ບໍ່; protocol/remote ແຕ່ລະຮຸ່ນອາດຕ່າງ","ຄືກັນສະເພາະເມື່ອບໍ່ໃຊ້ library","ຄືກັນເພາະ pin 2"],1,"ຄວນພິມຄ່າຈິງຜ່ານ Serial Monitor ແລ້ວນຳໄປໃຊ້."],
  ["IR Remote","Serial.println(command, HEX) ຊ່ວຍຫຍັງ?",["ສະແດງ command ໃນຮູບເລກຖານ 16","ແປ command ເປັນອຸນຫະພູມ","ສົ່ງ IR ກັບຄືນ","ປິດ receiver"],0,"HEX ເຮັດໃຫ້ລະຫັດສັ້ນ ແລະອ່ານງ່າຍ."],
  ["IR Remote","ຖ້າຕ້ອງການໃຫ້ປຸ່ມໜຶ່ງສະຫຼັບ LED ຕິດ/ດັບ, ແນວຄິດໃດເໝາະສົມ?",["ເກັບ bool ledOn ແລ້ວໃຊ້ ledOn = !ledOn","ລຶບ loop()","ໃຊ້ analogRead() ກັບ LED","ບໍ່ຕ້ອງປຽບທຽບ command"],0,"Boolean toggle ຈື່ສະຖານະ ແລະສະຫຼັບ true/false ໄດ້."],
  ["HC-SR04","HC-SR04 ວັດຫຍັງ?",["ຄວາມຊຸ່ມອາກາດ","ລະຍະຫ່າງ","ລະຫັດ remote","ສີ"],1,"HC-SR04 ໃຊ້ ultrasonic time-of-flight ເພື່ອຫາລະຍະ."],
  ["HC-SR04","TRIG pin ມີໜ້າທີ່ຫຍັງ?",["ຮັບເວລາ echo","ຮັບຄຳສັ່ງໃຫ້ sensor ສົ່ງຄື້ນ","ວັດ °C","ຮັບ IR command"],1,"Arduino ສົ່ງ pulse ໄປ TRIG ເພື່ອເລີ່ມການວັດ."],
  ["HC-SR04","ECHO pin ມີໜ້າທີ່ຫຍັງ?",["ສົ່ງໄຟ 5V ຕະຫຼອດ","ສົ່ງ pulse ທີ່ຄວາມຍາວແທນເວລາໄປ-ກັບ","ຄວບຄຸມ LED","ກຳນົດ baud rate"],1,"ຄວາມກວ້າງຂອງ ECHO pulse ແທນ travel time."],
  ["HC-SR04","TRIG ຄວນຖືກຕັ້ງ pinMode ເປັນຫຍັງ?",["INPUT","OUTPUT","INPUT_PULLUP ເທົ່ານັ້ນ","ANALOG"],1,"Arduino ຕ້ອງສົ່ງ pulse ອອກ TRIG."],
  ["HC-SR04","ECHO ຄວນຖືກຕັ້ງ pinMode ເປັນຫຍັງ?",["INPUT","OUTPUT","PWM OUTPUT","ບໍ່ຕ້ອງຕໍ່"],0,"Arduino ຮັບ pulse ຈາກ ECHO ຈຶ່ງເປັນ INPUT."],
  ["HC-SR04","pulse ທີ່ TRIG ທົ່ວໄປຍາວປະມານເທົ່າໃດ?",["10 microseconds","10 seconds","100 milliseconds","1 minute"],0,"HC-SR04 ເລີ່ມການວັດດ້ວຍ HIGH pulse ປະມານ 10 µs."],
  ["HC-SR04","pulseIn(ECHO_PIN, HIGH) ສົ່ງຄ່າຫຍັງໃຫ້ເຮົາ?",["ຄວາມຍາວເວລາທີ່ pulse ເປັນ HIGH","ລະຍະ cm ສຳເລັດຮູບ","ອຸນຫະພູມ","command ຂອງ remote"],0,"pulseIn ວັດເວລາ; ເຮົາຍັງຕ້ອງຄຳນວນເປັນລະຍະ."],
  ["HC-SR04","ເປັນຫຍັງສູດ distance = duration × 0.0343 / 2 ຈຶ່ງຫານ 2?",["ເພາະມີ 2 pin","ເພາະ duration ລວມໄລຍະທາງໄປ ແລະກັບ","ເພາະ Arduino ເຮັດວຽກ 2 ຄັ້ງ","ເພາະມີ 2 sensor"],1,"ລະຍະຫາວັດຖຸແມ່ນເຄິ່ງໜຶ່ງຂອງທາງທັງໝົດທີ່ສຽງເດີນ."],
  ["HC-SR04","ການໃສ່ timeout ໃນ pulseIn() ຊ່ວຍຫຍັງ?",["ບໍ່ໃຫ້ code ລໍຖ້າ echo ດົນເກີນໄປ","ເພີ່ມຄວາມໄວສຽງ","ແປ cm ເປັນ °C","ເປີດ Serial"],0,"Timeout ຊ່ວຍໃຫ້ໂປຣແກຣມກັບມາເຮັດວຽກຕໍ່ເມື່ອບໍ່ມີ echo."],
  ["Serial / Debug","Serial.begin(9600) ໝາຍເຖິງຫຍັງ?",["ເລີ່ມ serial communication ທີ່ 9600 baud","ລໍຖ້າ 9600 ms","ອ່ານ analog 9600 ຄັ້ງ","ຕັ້ງ pin 9600"],0,"9600 ແມ່ນອັດຕາສື່ສານ baud."],
  ["Serial / Debug","Serial.print() ແລະ Serial.println() ຕ່າງກັນຫຍັງ?",["println() ຂຶ້ນແຖວໃໝ່ຫຼັງພິມ","print() ໃຊ້ໄດ້ແຕ່ຕົວເລກ","println() ປິດ Serial","ບໍ່ຕ່າງກັນ"],0,"ln ຫຍໍ້ຈາກ line: ພິມ newline ຕໍ່ທ້າຍ."],
  ["Serial / Debug","ຖ້າ Serial Monitor ສະແດງຕົວໜັງສືມົ່ວ ຄວນກວດຫຍັງກ່ອນ?",["Baud rate ໃຫ້ກົງກັບ Serial.begin()","ປ່ຽນ PIR ເປັນ OUTPUT","ລຶບ GND","ຄູນຄ່າດ້ວຍ 1023"],0,"Baud mismatch ເປັນສາເຫດພົບໄດ້ບ່ອຍຂອງຂໍ້ຄວາມມົ່ວ."],
  ["Serial / Debug","Sensor ອ່ານຄ່າບໍ່ຖືກ. ຂັ້ນ debug ທີ່ດີແມ່ນຂໍ້ໃດ?",["ພິມ raw value, ກວດ pin, power, GND ແລະການຕໍ່","ປ່ຽນ code ທັງໝົດທັນທີ","ເພີ່ມ delay 1 ຊົ່ວໂມງ","ຖອດ sensor ແລ້ວຄາດເດົາຄ່າ"],0,"Debug ທີ່ດີແຍກກວດ hardware ແລະ raw data ກ່ອນສູດຄຳນວນ."],
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const storageKey = "arduino-lao-review-v1";
let saved = JSON.parse(localStorage.getItem(storageKey) || '{"lessons":[],"best":0,"attempts":0}');
let currentLesson = "basics", codeIndex = 0, flashIndex = 0, flashAnswer = false;
let quiz = null;

function persist(){ localStorage.setItem(storageKey, JSON.stringify(saved)); updateProgress(); }
function updateProgress(){
  const lessonPart = (saved.lessons.length / Object.keys(lessons).length) * 70;
  const quizPart = saved.attempts ? 30 : 0;
  const pct = Math.round(lessonPart + quizPart);
  $("#progressText").textContent = pct + "%";
  $("#progressBar").style.width = pct + "%";
  $("#progressHint").textContent = pct === 100 ? "ຮຽນຄົບແລ້ວ — ລອງເຮັດຄະແນນໃຫ້ດີຂຶ້ນ!" : `ຮຽນແລ້ວ ${saved.lessons.length}/7 ບົດ · ທົດສອບ ${saved.attempts} ຄັ້ງ`;
  $("#bestScore").textContent = saved.attempts ? saved.best + "%" : "—";
}
function renderLesson(id){
  currentLesson=id; const item=lessons[id]; const done=saved.lessons.includes(id);
  $("#lessonPanel").innerHTML=`<div class="lesson-layout reveal"><div><h3>${item.title}</h3>${item.body}<button class="complete-btn ${done?'done':''}" type="button">${done?'✓ ຮຽນແລ້ວ':'ໝາຍວ່າຮຽນແລ້ວ'}</button></div><aside class="lesson-aside">${item.tip}</aside></div>`;
  $$("[data-lesson]").forEach(b=>b.setAttribute("aria-selected",String(b.dataset.lesson===id)));
  $(".complete-btn").onclick=()=>{if(!saved.lessons.includes(id))saved.lessons.push(id);else saved.lessons=saved.lessons.filter(x=>x!==id);persist();renderLesson(id)};
}
function renderCode(){
  const item=codeExamples[codeIndex];
  $("#codeBadge").textContent=item.badge; $("#codeTitle").textContent=item.title; $("#codeNote").textContent=item.note; $("#codeBlock").textContent=item.code; $("#codeExplain").innerHTML=item.explain;
  $$("#codeMenu button").forEach((b,i)=>b.classList.toggle("active",i===codeIndex));
}
function renderFlash(){
  const pair=flashcards[flashIndex];
  $("#flashcard").classList.toggle("answer",flashAnswer);
  $("#flashLabel").textContent=(flashAnswer?"ຄຳຕອບ":"ຄຳຖາມ")+` ${flashIndex+1}/${flashcards.length}`;
  $("#flashText").textContent=pair[flashAnswer?1:0];
  $("#flashcard small").textContent=flashAnswer?"ແຕະເພື່ອກັບໄປຄຳຖາມ":"ແຕະເພື່ອເປີດຄຳຕອບ";
}
function shuffled(array){return [...array].sort(()=>Math.random()-.5)}
function startQuiz(mode){
  const set=mode==="practice"?shuffled(questions.map((q,i)=>i)).slice(0,10):questions.map((q,i)=>i);
  quiz={mode,set,index:0,answers:[],selected:null,checked:false};
  $("#quizIntro").hidden=true; $("#results").hidden=true; $("#quizApp").hidden=false; renderQuestion();
  $("#quiz").scrollIntoView({behavior:"smooth"});
}
function renderQuestion(){
  const q=questions[quiz.set[quiz.index]], total=quiz.set.length;
  $("#quizMode").textContent=quiz.mode==="practice"?"ຝຶກໄວ · ເບິ່ງສະເຫຼີຍທັນທີ":"ຈຳລອງເສັງ · 50 ຂໍ້";
  $("#quizCount").textContent=`ຂໍ້ ${quiz.index+1}/${total}`; $("#quizProgress").style.width=`${quiz.index/total*100}%`;
  $("#questionTopic").textContent=q[0]; $("#questionText").textContent=q[1];
  $("#answers").innerHTML=q[2].map((a,i)=>`<button class="answer-option" type="button" data-answer="${i}"><span class="letter">${String.fromCharCode(65+i)}</span><span>${a}</span></button>`).join("");
  $("#feedback").hidden=true; $("#feedback").className="feedback"; $("#nextQuestion").disabled=true; $("#nextQuestion").textContent="ກວດຄຳຕອບ";
  quiz.selected=null; quiz.checked=false;
  $$("[data-answer]").forEach(b=>b.onclick=()=>{if(quiz.checked)return;quiz.selected=+b.dataset.answer;$$('[data-answer]').forEach(x=>x.classList.toggle('selected',x===b));$("#nextQuestion").disabled=false});
}
function checkOrNext(){
  const q=questions[quiz.set[quiz.index]];
  if(!quiz.checked){
    quiz.checked=true; quiz.answers.push({question:quiz.set[quiz.index],selected:quiz.selected,correct:quiz.selected===q[3]});
    if(quiz.mode==="exam"){
      if(quiz.index<quiz.set.length-1){quiz.index++;renderQuestion()}else finishQuiz();
      return;
    }
    $$("[data-answer]").forEach(b=>{const n=+b.dataset.answer;if(n===q[3])b.classList.add("correct");if(n===quiz.selected&&n!==q[3])b.classList.add("wrong")});
    if(quiz.mode==="practice"){
      const fb=$("#feedback"); fb.hidden=false; fb.classList.toggle("wrong",quiz.selected!==q[3]); fb.innerHTML=`<strong>${quiz.selected===q[3]?"ຖືກຕ້ອງ!":"ຍັງບໍ່ຖືກ"}</strong><br>${q[4]}`;
    }
    $("#nextQuestion").textContent=quiz.index===quiz.set.length-1?"ເບິ່ງຜົນ":"ຂໍ້ຕໍ່ໄປ →";
  } else {
    if(quiz.index<quiz.set.length-1){quiz.index++;renderQuestion()}else finishQuiz();
  }
}
function finishQuiz(){
  const correct=quiz.answers.filter(a=>a.correct).length, total=quiz.set.length, pct=Math.round(correct/total*100);
  saved.attempts++; saved.best=Math.max(saved.best,pct); persist();
  $("#quizApp").hidden=true; const result=$("#results"); result.hidden=false;
  const message=pct>=80?"ດີຫຼາຍ! ພ້ອມເສັງແລ້ວ":pct>=60?"ໃກ້ແລ້ວ — ທົບທວນຂໍ້ທີ່ຜິດອີກໜ້ອຍ":"ກັບໄປຮຽນທີລະຫົວຂໍ້ ແລ້ວລອງໃໝ່";
  const review=quiz.answers.map((a,i)=>{const q=questions[a.question];return `<details><summary>${a.correct?'✓':'✕'} ຂໍ້ ${i+1}: ${q[1]}</summary><p><strong>ຄຳຕອບ:</strong> ${q[2][q[3]]}</p><p>${q[4]}</p></details>`}).join("");
  result.innerHTML=`<p class="eyebrow">ຜົນທົດສອບ</p><h2>${message}</h2><div class="score-ring" style="--score:${pct*3.6}deg"><strong>${pct}%</strong></div><p>ຕອບຖືກ <strong>${correct}/${total}</strong> ຂໍ້ · ຄະແນນດີສຸດ ${saved.best}%</p><div class="result-actions"><button class="button primary" type="button" data-again>ລອງອີກຄັ້ງ</button><a class="button secondary" href="#lessons">ກັບໄປທົບທວນ</a></div><div class="review-list"><h3>ສະເຫຼີຍທຸກຂໍ້</h3>${review}</div>`;
  $("[data-again]",result).onclick=()=>startQuiz(quiz.mode);
}

function init(){
  renderLesson("basics"); updateProgress();
  $$("[data-lesson]").forEach(b=>b.onclick=()=>renderLesson(b.dataset.lesson));
  $("#codeMenu").innerHTML=codeExamples.map((x,i)=>`<button type="button" data-code="${i}">${String(i+1).padStart(2,'0')} · ${x.title}</button>`).join("");
  $$("[data-code]").forEach(b=>b.onclick=()=>{codeIndex=+b.dataset.code;renderCode()}); renderCode(); renderFlash();
  $("#copyCode").onclick=async()=>{try{await navigator.clipboard.writeText(codeExamples[codeIndex].code);$("#copyCode").textContent="✓ ຄັດລອກແລ້ວ";setTimeout(()=>$("#copyCode").textContent="ຄັດລອກ code",1500)}catch{$("#copyCode").textContent="ເລືອກແລ້ວ Ctrl+C";const r=document.createRange();r.selectNodeContents($("#codeBlock"));getSelection().removeAllRanges();getSelection().addRange(r)}};
  $("#flashcard").onclick=()=>{flashAnswer=!flashAnswer;renderFlash()};
  $("#flashPrev").onclick=()=>{flashIndex=(flashIndex-1+flashcards.length)%flashcards.length;flashAnswer=false;renderFlash()};
  $("#flashNext").onclick=()=>{flashIndex=(flashIndex+1)%flashcards.length;flashAnswer=false;renderFlash()};
  $$('[data-start-practice]').forEach(b=>b.onclick=()=>startQuiz('practice')); $$('[data-start-exam]').forEach(b=>b.onclick=()=>startQuiz('exam'));
  $("#nextQuestion").onclick=checkOrNext; $("#quitQuiz").onclick=()=>{$("#quizApp").hidden=true;$("#quizIntro").hidden=false;quiz=null};
  $("#resetProgress").onclick=()=>{if(confirm("ລ້າງຄວາມຄືບໜ້າ ແລະຄະແນນທັງໝົດບໍ?")){saved={lessons:[],best:0,attempts:0};persist();renderLesson(currentLesson)}};
  $(".nav-toggle").onclick=()=>{const nav=$("#nav"),open=nav.classList.toggle("open");$(".nav-toggle").setAttribute("aria-expanded",open)};
  $$("#nav a").forEach(a=>a.onclick=()=>{$("#nav").classList.remove("open");$(".nav-toggle").setAttribute("aria-expanded","false")});
}
document.addEventListener("DOMContentLoaded",init);
