const valueShow = document.getElementById("show");
var shows = 0;
function showDe(){
if(shows <= 0){
  shows = 0;
  valueShow.textContent= shows;
}else{
  shows -= 500;
  valueShow.textContent= shows;}}
function showIn(){
  shows += 500;
  valueShow.textContent= shows;}

const valueElement_nian = document.getElementById("count_nian");
const InButton_nian = document.getElementById("increase_nian");
const DeButton_nian = document.getElementById("decrease_nian");
let currentValue_nian = 0;
function updateValue_nian() {
  valueElement_nian.textContent = currentValue_nian;}
InButton_nian.addEventListener("click", function() {
  currentValue_nian += 1;
  updateValue_nian();
  showIn()});
DeButton_nian.addEventListener("click", function() {
  currentValue_nian -= 1;
  if(currentValue_nian < 0){
    currentValue_nian = 0;}
  updateValue_nian();
  showDe()});

const valueElement_dusk = document.getElementById("count_dusk");
const InButton_dusk = document.getElementById("increase_dusk");
const DeButton_dusk = document.getElementById("decrease_dusk");
let currentValue_dusk = 0;
function updateValue_dusk() {
  valueElement_dusk.textContent = currentValue_dusk;}
InButton_dusk.addEventListener("click", function() {
  currentValue_dusk += 1;
  updateValue_dusk();
  showIn();});
DeButton_dusk.addEventListener("click", function() {
  currentValue_dusk -= 1;
  if(currentValue_dusk < 0){
    currentValue_dusk = 0;}
  updateValue_dusk();
  showDe();});

const valueElement_ling = document.getElementById("count_ling");
const InButton_ling = document.getElementById("increase_ling");
const DeButton_ling = document.getElementById("decrease_ling");
let currentValue_ling = 0;
function updateValue_ling() {
  valueElement_ling.textContent = currentValue_ling;}
InButton_ling.addEventListener("click", function() {
  currentValue_ling += 1;
  updateValue_ling();
  showIn();});
DeButton_ling.addEventListener("click", function() {
  currentValue_ling -= 1;
  if(currentValue_ling < 0){
    currentValue_ling = 0;}
  updateValue_ling();
  showDe();});

const valueElement_saga = document.getElementById("count_saga");
const InButton_saga = document.getElementById("increase_saga");
const DeButton_saga = document.getElementById("decrease_saga");
let currentValue_saga = 0;
function updateValue_saga() {
  valueElement_saga.textContent = currentValue_saga;}
InButton_saga.addEventListener("click", function() {
  currentValue_saga += 1;
  updateValue_saga();
  showIn();});
DeButton_saga.addEventListener("click", function() {
  currentValue_saga -= 1;
  if(currentValue_saga < 0){
    currentValue_saga = 0;}
  updateValue_saga();
  showDe();});

function sumbit(){
  var result = (currentValue_nian+currentValue_dusk+currentValue_ling+currentValue_saga)*500;
  if (result > 1000){
    var newresult = result*0.9;
    alert("รวมทั้งสิ้น ฿"+newresult);
  }else{
    alert("รวมทั้งสิ้น ฿"+result);}}

function pro(){
  alert("โปรโมชั่นเมื่อสั่งซื้อสินค้ามากกว่า 1000 บาทลดทันที 10%");}

