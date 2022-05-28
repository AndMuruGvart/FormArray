export function validateValue(value) {
    if (value==='') {return 'Вы не ввели числа'}
    if (value.includes(',,')) return 'Введены некорректные данные';
    if (value.includes('..')) return 'Введены некорректные данные';
    if (value.includes(' . ')) return 'Введены некорректные данные';
    if (value.includes('--')) return 'Введены некорректные данные';
    if (value.length>150) return 'Вы ввели слишком большой диапазон чисел';
    //Проверка на 2 точки,  2 минуса, и ограничение на числа не больше 16 символов  в веденных числах между запятыми или пробелами
    // Выделение чисел, разделенных пробелами и запятыми
    let splitString=value.split(',');
    let newString='';
    for (let string of splitString) {
      newString=newString+' '+string;
    }
    let strWithoutSpace = newString.replace(/\s+/g, ' ');
    splitString=strWithoutSpace.split(' ');
    for (let i=0; i<splitString.length; i++) {
      if(splitString[i].split(".").length-1>1) 
      return 'В числе не может быть несколько точек';
      if(splitString[i].split("-").length-1>1) 
      return 'В числе не может быть несколько минусов';
      if(splitString[i].length>16) 
      return 'В числе не может быть больше 16 знаков';
      if (i>0) {if (splitString[i-1].includes('-') && splitString[i-1].length==1) {splitString[i]='-'.concat(splitString[i]); splitString[i-1]=''}
    }} 
     newString='';
    for (let string of splitString) {
      newString=newString+' '+string;
    }
    if (value.match(/[^\d,.-\s]+/)) return 'Введены некорректные данные'; else {
        let arr=[];
        let number = /-?\d+(\.\d+)?/g;
        let m;
        while ((m = number.exec(newString)) != null) {
          if (!isNaN(m[0])) arr.push(m[0]);
        else return 'Введены некорректные данные'
        }
        if (arr.length<2) return 'Необходимо ввести минимум два числа'
        arr.sort((a, b) => a - b);
        const twoMinAmount=Number(arr[0])+Number(arr[1]);
        return (`Сумма двух наименьших элементов массива равна ${twoMinAmount}`); 
    } 
    return '';
  }