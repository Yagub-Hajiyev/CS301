let fullName = 'Yagub Hajiyev Novruz'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
console.log('_____1st question_____');

console.log("First method");
let myName=[]
let count1=0
for (let i=0; i<fullName.length; i++){
    if(fullName[i]!=" "){
        myName[count1]=fullName[i]
        count1+=1
    }
}
console.log(myName);

console.log("Second method");
let myName2=fullName.replaceAll(" ", '').split("")
console.log(myName2);

console.log('Function method');
function func1(anyString1){
    console.log(anyString1.split(''));
}
func1(fullName)

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
console.log('_____2nd question_____');
let array2=fullName.split(" ")
fullName2=array2[1]+" "+array2[0]+" "+array2[2]
console.log(fullName2);

console.log('Second method');
console.log(fullName.replaceAll('Hajiyev','Yagub').replace('Yagub','Hajiyev'));

console.log("function method");
function func2(anyString2){
    let array=anyString2.split(" ")
    console.log(array[1]+" "+array[0]+" "+array[2]);
}
func2(fullName)

// 3) Alinan yeni arrayi stringe cevirin(join)
console.log('_____3rd question_____');

console.log('First method');
let arr3=fullName.split(" ")
fullName=arr3.join(" ")
console.log(fullName);

console.log("Second method");
let arr32=fullName.replaceAll(" ", '').split("")
let fullName3=arr32.join('')
console.log(fullName3);

console.log('Function method');
function func3(anyString3){
    let array=anyString3.replaceAll(' ','').split('')
    console.log(array.join(''));
}
func3(fullName)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
console.log('_____4th question_____');
console.log("First method");
let num=0
for (let i=0; i<arr.length; i++){
    if(arr[i]===5){
         num++
    }
}
console.log(num);

console.log('Second method');
let sum4=0
arr.map(item=>item==5?sum4++:null)
console.log(sum4);

console.log('Function method');
function func4(anyArray4){
    let sum=0
    anyArray4.map(item=>item==5?sum++:null)
    console.log(sum);
}
func4(arr)

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
console.log('_____5th question_____');
console.log('First method');
let sum5=0
for (let i=0; i<arr.length;i++){
    sum5=sum5+arr[i]
}
console.log(sum5);

console.log('Second method');
let sum52=0
arr.map(item=>item ? sum52+=item:null)
console.log(sum52);

console.log('Third method');
const sum53=arr.reduce((a,b)=>a+b)
console.log(sum53);

console.log('Function method');
function func5(anyArray5){
    console.log(anyArray5.reduce((a,b)=>a+b));
}
func5(arr)

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
console.log('_____6th question_____');

console.log('First method');
let arr6=[]
for(let i=0; i<arr.length; i++){
    let count6=0
    for(let a=0; a<arr.length;a++){
        if(arr[a]===arr[i]){
            count6++
        }
        if (count6>1) {
            arr6[i]=arr[i]           
        }
    }
}
console.log(arr6.sort(function(a, b){return(a-b)}));

console.log('Function method');
function func6(anyArray6){
    let array=[]
for(let i=0; i<anyArray6.length; i++){
    let count=0
    for(let a=0; a<anyArray6.length;a++){
        if(anyArray6[a]===anyArray6[i]){
            count++
        }
        if (count>1) {
            array[i]=anyArray6[i]           
        }
    }
}
console.log(array.sort(function(a, b){return(a-b)}));
}
func6(arr)

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
console.log('_____7th question_____');

console.log('First method');
let x7=Math.max.apply(Math,arr)
console.log("The biggest number is "+x7);
let count7=0
for(let i=0; i<arr.length;i++){
    if(arr[i]===x7){
        count7++
    }
}
console.log(x7+" presents "+count7+" times in the array");

console.log('Second method');
let x72=Math.max.apply(Math,arr)
console.log("The biggest number is "+x72);
let count72=0
arr.map(item=>item===x72?count72++:null)
console.log(x72+" presents "+count72+" times in the array");

console.log('Function method');
function func7(anyArray7){
    let x=Math.max.apply(Math,anyArray7)
    console.log("The biggest number is "+x);
    let count=0
    anyArray7.map(item=>item===x?count++:null)
    console.log(x+" presents "+count+" times in the array");
}
func7(arr)

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
console.log('_____8th question_____');

console.log('First method');
let myName8="Yagub"
if(arr.includes(myName8.length)){
    console.log("My name has "+myName8.length+" letters and the 'arr' includes "+myName8.length);
}

console.log('Second method');
let myName82="Yagub"
arr.map(item=>item===myName82.length? console.log("My name has "+myName82.length+" letters and the 'arr' includes "+myName82.length): null)

console.log('Function method');
function func8(anyString8, anyArray8){
    anyArray8.map(item=>item===anyString8.length? console.log("My name has "+anyString8.length+" letters and the 'arr' includes "+anyString8.length): null)
}
func8("Yagub",arr)

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
console.log('_____9th question_____');

console.log('First method');
for(let i=0; i<arr.length; i++){
    let num9 = NaN || arr[i]%3
    if(num9===2){
        console.log(arr[i]+" can be devided by 3 but 2 remains");
        console.log("Index of "+arr[i]+" is "+arr.indexOf(arr[i], i));
    break;
    }
}

console.log('Function method');
const func9 =(anyArray9)=>{
    for(let i=0; i<anyArray9.length; i++){
        let num = NaN || arr[i]%3
        if(num===2){
            console.log(anyArray9[i]+" can be devided by 3 but 2 remains");
            console.log("Index of "+anyArray9[i]+" is "+anyArray9.indexOf(anyArray9[i], i));
        break;
        }
    }
}
func9(arr)

//10) arraydaki en boyuk reqemin ilk indexini tapin
console.log('_____10th question_____');

console.log('First method');
console.log(arr.indexOf(Math.max.apply(Math,arr)));

console.log('Function method');
const func10=(anyArray10)=>{
    console.log(anyArray10.indexOf(Math.max.apply(Math,anyArray10)));
}
func10(arr)

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
console.log('____11th question_____');

console.log('First method');
for(let i=0; i<arr.length;i++){
    if(arr[i]===4){
        console.log(arr.lastIndexOf(arr[i], i));
    }
}

console.log('Second method');
arr.map((item,index)=>item==4 ? console.log(index):null)

console.log('Function method');
const func11=(anyArray11)=>{
    anyArray11.map((item,index)=>item==4 ? console.log(index):null)
}
func11(arr)

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
console.log('_____12th question_____');

console.log('First method');
console.log("The smallest index of 5 is "+arr.indexOf(5));
console.log("The biggest index of 5 is "+arr.lastIndexOf(5));

console.log('Second method');
let count12=0
let arr12=[]
for(let i=0; i<arr.length;i++){
    if (arr[i]==5) {
        arr12[count12]=i
        count12+=1
    }
}
console.log("The smallest index of 5 is "+arr12[0]);
console.log("The biggest index of 5 is "+arr12[arr12.length-1]);

console.log('Third method');
let arr123=[]
let count123=-1
arr.map((item,index)=>item==5 ? arr123[count123+=1]=index:null)
console.log("The smallest index of 5 is "+arr123[0]);
console.log("The biggest index of 5 is "+arr123[arr123.length-1]);

console.log('Function method');
const func12=(anyArray12)=>{
    console.log("The smallest index of 5 is "+anyArray12.indexOf(5));
    console.log("The biggest index of 5 is "+anyArray12.lastIndexOf(5));
}
func12(arr)

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
console.log('_____13th question_____');

console.log('First method');
let arr13=[]
let x=0
for (let i=0; i<arr.length; i++){
    if (arr[i]>2){      
        arr13[x]=arr[i]
        x++
    }
}
console.log(arr.length-arr13.length);

console.log('Second method');
let arr132=[]
let count13=0
arr.map(item=>item>2 ?  arr132[count13++]=item:null)
console.log(arr.length-arr132.length);

console.log('Function method');
const func13=(anyArray13)=>{
    let array=[]
    let count=0
    anyArray13.map(item=>item>2 ?  array[count++]=item:null)
    console.log(anyArray13.length-array.length);
}
func13(arr)

//14) 7 reqeminin indexleri cemini tapin.
console.log('_____14th question_____');

console.log('First method');
let sum14=0
for (let i=0; i<arr.length;i++){
    if (arr[i]==7){
        sum14=sum14+arr.lastIndexOf(7, i)
    }
}
console.log("The summarize of 7's indexs is "+sum14);

console.log('Second method');
let sum142=0
arr.map((item,index)=>item==7 ? sum142+=index:null)
console.log("The summarize of 7's indexs is "+sum142);

console.log('Function method');
const func14=(anyArray14)=>{
    let sum=0
    anyArray14.map((item,index)=>item==7 ? sum+=index:null)
    console.log("The summarize of 7's indexs is "+sum);
}
func14(arr)

///////////////////////////////////////////////////////////////////////
let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
console.log('_____16th question_____');

console.log('First method');
let arr16=[]
let count16=0
for (let i=0; i<arr2.length; i++){
    if (arr2[i].name.startsWith("t")){
        arr16[count16]=arr2[i]
        count16+=1
    }
}
console.log(arr16);

console.log('Second method');
let arr162=[]
let count162=-1
arr2.map(item=>item.name.startsWith('t') ? arr162[count162+=1]=item:null)
console.log(arr162);

console.log('Third method');
const arr163=arr2.filter(item=>item.name.startsWith('t'))
console.log(arr163);

console.log('Function method');
const func16=(anyArray16)=>{
   console.log(anyArray16.filter(item=>item.name.startsWith('t')));
}
func16(arr2)

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
console.log('_____17th question_____');

console.log('First method');
let sum17=0
for (let i=0; i<arr2.length; i++){
    if (arr2[i].name.startsWith("t") && arr2[i].name.endsWith("t")){
    sum17++
    }
}
console.log(sum17);

console.log('Second method');
let sum172=0
arr2.map(item=>item.name.startsWith('t')&&item.name.endsWith('t') ? sum172++:null)
console.log(sum172);

console.log('Third method');
console.log(arr2.filter(item=>item.name.startsWith('t')&&item.name.endsWith('t')).length);

console.log('Function method');
const func17=(anyArray17)=>{
    console.log(anyArray17.filter(item=>item.name.startsWith('t')&&item.name.endsWith('t')).length);
}
func17(arr2)

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
console.log('_____18th question_____');

console.log('First method');
let sum18=0
for (let i=0; i<arr2.length; i++){
    if (arr2[i].name.startsWith("t") && arr2[i].name.endsWith("t")){
    sum18+=arr2[i].key
    }
}
console.log(sum18);

console.log('Second method');
let sum182=0
arr2.map(item=>item.name.startsWith('t')&&item.name.endsWith('t') ? sum182+=item.key:null)
console.log(sum182);

console.log('Third method');
const arr183=arr2.filter(item=>item.name.startsWith('t')&&item.name.endsWith('t'))
let sum183=0
arr183.map(item=> sum183+=item.key)
console.log(sum183);

console.log('Function method');
const func18 = function (anyArray18) {
    let sum=0
    anyArray18.map(item=>item.name.startsWith('t')&&item.name.endsWith('t') ? sum+=item.key:null)
    console.log(sum);
};
func18(arr2)


// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
console.log('_____19th question_____');

console.log('First method');
let arr19=[]
for(let i=0; i<arr2.length;i++){
    arr19[i]=JSON.parse(JSON.stringify(arr2[i]))
    if(arr19[i].name.endsWith('e')){
        arr19[i].name="SuperDev"
    }
}
console.log(arr19);

console.log('Second method');
let arr192=JSON.parse(JSON.stringify(arr2))
arr2.map((item,index)=>item.name.endsWith('e') ? arr192[index].name='SuperDev':null)
console.log(arr192);

console.log('Function method');
const func19 = function (anyArray19){
    let array=JSON.parse(JSON.stringify(anyArray19))
    anyArray19.map((item,index)=>item.name.endsWith('e') ? array[index].name='SuperDev':null)
    console.log(array);
}
func19(arr2)

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
console.log('_____20th question_____');

console.log('First method');
let arr20=[]
for(let i=0;i<arr2.length;i++){
    arr20[i]=arr2[i].name.length
}
let index20=arr20.indexOf(Math.max.apply(Math,arr20))
console.log(arr2[index20].key);

console.log('Second method');
let arr202=[]
arr2.map((item,index)=>item ? arr202[index]=item.name.length:null)
console.log(arr2[arr202.indexOf(Math.max.apply(Math,arr202))].key);

console.log('Function method');
const func20=function(anyArray20){
    let array=[]
    anyArray20.map((item,index)=>item ? array[index]=item.name.length:null)
    console.log(anyArray20[array.indexOf(Math.max.apply(Math,array))].key);
}
func20(arr2)

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
console.log('_____21th question_____');

console.log('First method');
let arr21=[]
for(let i=0;i<arr2.length;i++){
    arr21[i]=arr2[i].name.length
}
let x21=arr21.indexOf(Math.max.apply(Math,arr21))
console.log(x21*=x21);

console.log('Second method');
let arr212=[]
arr2.map((item,index)=>item ? arr212[index]=item.name.length:null)
console.log(arr212.indexOf(Math.max.apply(Math,arr212))*arr212.indexOf(Math.max.apply(Math,arr212)));

console.log('Function method');
const func21=function(anyArray21){
    let array=[]
    anyArray21.map((item,index)=>item ? array[index]=item.name.length:null)
    console.log(array.indexOf(Math.max.apply(Math,array))*array.indexOf(Math.max.apply(Math,array)));
}
func21(arr2)

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
console.log('_____22th question_____');

console.log('First method');
let arr22=[]
let x22=0
for (let i=0; i<arr2.length; i++){
    if (arr2[i].name.length==4){
        arr22[x22]=arr2[i].name
        x22+=1
    }
}
console.log(arr22);

console.log('Second method');
let arr222=[]
let count22=-1
arr2.map(item=>item.name.length===4 ? arr222[count22+=1]=item:null)
console.log(arr222);

console.log('Third method');
const arr223=arr2.filter(item=>item.name.length==4)
console.log(arr223);

console.log('Function method');
const func22=function(anyArray22){
    console.log(anyArray22.filter(item=>item.name.length==4));
}
func22(arr2)

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
console.log('_____23th question_____');

console.log('First method');
let arr23=[]
for(let i=0;i<arr2.length;i++){
    arr23[i]=arr2[i].key
}
console.log(arr2[arr23.indexOf(Math.max.apply(Math,arr23))].name);

console.log('Second method');
let arr232=[]
arr2.map((item, index)=>item ? arr232[index]=item.key:null)
console.log(arr2[arr232.indexOf(Math.max.apply(Math,arr232))].name);

console.log('Function method');
const func23=function(anyArray23){
    let array=[]
    anyArray23.map((item, index)=>item ? array[index]=item.key:null)
    console.log(anyArray23[array.indexOf(Math.max.apply(Math,array))].name);
}
func23(arr2)

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
console.log('_____24th question_____');

console.log('First method');
for (let i=0; i<arr2.length; i++){
    if(arr2[i].name.includes("l")){
        let count24=0
        for(let x=0;x<arr2[i].name.length;x++){
            if(arr2[i].name[x]=="l"){
                count24+=1
            }
        }
        if(count24==2){
            console.log(arr2.indexOf(arr2[i]));
        }
    }
}

console.log('Second method');
arr2.map((item,index)=>item.name.includes('l') && item.name.indexOf('l') !== item.name.lastIndexOf('l')? console.log(index):null)

console.log('Function method');
const func24=function(anyArray24){
    anyArray24.map((item,index)=>item.name.includes('l') && item.name.indexOf('l') !== item.name.lastIndexOf('l')? console.log(index):null)
}
func24(arr2)

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
console.log('_____25th question_____');

console.log('First method');
for (let i=0; i<arr2.length; i++){
    if(arr2[i].name.includes("t")){
        let count25=0
        for(let x=0;x<arr2[i].name.length;x++){
            if(arr2[i].name[x]=="t"){
                count25+=1
            }
        }
        if(count25==2){
            console.log(arr2[i].key);
        }
    }
}

console.log('Second method');
arr2.map((item,index)=>item.name.includes('t') && item.name.indexOf('t') !== item.name.lastIndexOf('t')? console.log(item.key):null)

console.log('Function method');
const func25=function(anyArray25){
    anyArray25.map((item,index)=>item.name.includes('t') && item.name.indexOf('t') !== item.name.lastIndexOf('t')? console.log(item.key):null)
}
func25(arr2)