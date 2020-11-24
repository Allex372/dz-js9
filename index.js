// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.
// function myDay(time , taskStart){
//     console.log('привіт мій друже! дякую що завітав')
//     console.log('Зараз я розкажу тобі про свій день!')
//
//     setTimeout(()=>{
//         console.log('DAY START')
//         if (time > 8){
//             taskStart('проспав',null);
//             return;
//         }
//          taskStart( null, 'прокинувся вчасно, можна спокійно вставати');
//     }, 2000)
// }
//
// function bathroom (day, cb){
//     setTimeout(()=>{
//         if (day === 'bad'){
//             cb(false, 'НАДЗВИЧАЙНО ЩВИДКО');
//             return
//         }
//         cb(true, 'Спокійно вмиваюся, та чищу зуби.');
//     },1000)
// }
//
//
// function breakfast(day,cb){
//     setTimeout(()=>{
//         if (day === 'bad'){
//             cb(false,'AAAAAAAAAAAA')
//         } else {
//             cb(true,'готую сніданок ')
//         }
//
//     },3000)
// }
//
// function goJob(day,cb){
//     setTimeout(()=>{
//         if (day === 'bad'){
//             cb(false,'AAAA')
//         }else {
//             cb(true, 'добираюся на роботку')
//         }
//     },500)
// }
// function work(day,cb){
//     setTimeout(()=>{
//         if (day==='bad'){
//             cb(false,'AAAA')
//         }else {
//             cb(true, 'встигну');
//         }
//     },3000)
// }
// function dinner(day,cb){
//     setTimeout(()=>{
//         if (day==='bad'){
//             cb(false,'AAAA')
//         }else {
//             cb(true, 'неймовірно смачний')
//         }
//     }, 500)
// }
// function hoHome(day,cb){
//     setTimeout(()=>{
//         if (day==='bad'){
//             cb(false,'AAA')
//         }else {
//             cb(true, 'з радості ')
//         }
//     }, 2000)
// }
//
// myDay(7, (error, standUp) => {
//     if (error){
//         console.log('Мля я проспав треба летіти');
//     }else {
//         console.log(`${standUp} з ліжка`)
//     }
//
//    bathroom('', (err, text) => {
//        if(!err) {
//            console.log(text + ' ЧИЩУ ЗУБИ');
//        } else {
//            console.log(text);
//        }
//         breakfast('',(err, data)=> {
//             if (!err) {
//                 console.log('Все пропало не встигаю снідати');
//             } else {
//                 console.log(data + 'Можна ще новини з кавою почитати')
//             }
//             goJob('',(err,data) =>{
//                     if (!err){
//                         console.log('Фанарь я запізнився на автобус, треба йти пішки')
//                     }else {
//                         console.log('Під музичку чілю та ' +  data)
//                     }
//                     work('',(err,data)=>{
//                         if (!err){
//                             console.log('НІЧОго НЕ ВСТИГАЮ')
//                         }else {
//                             console.log(`Сьогодні все ${data} зробити:)`)
//                         }
//                         dinner('',(err, data)=>{
//                             if(!err){
//                                 console.log('НЕ ВСТИГАЮ ОБІДАТИ....ЦЕ КАПЕЦЬ')
//                             }else {
//                                 console.log(`Сьогодні обід ${data}`)
//                             }
//                             hoHome('',(err,data)=>{
//                                 if (!err){
//                                     console.log('НАП*ЮСЯ З ГОРЯ')
//                                 }else {
//                                     console.log(`${data} навалюся)`)
//                                 }
//                                 console.log('DAY OFFF)))))))')
//                             })
//                         })
//                     })
//                 })
//             })
//         })
// });

//
// function orderTour(money, taskWhenReady) {
//   console.log('Дякую, що звернулися до нас');
//   console.log('Tour in progres ......');
//
//   setTimeout(() => {
//     console.log('DONE');
//
//     if (money < 500) {
//       taskWhenReady('вам треба більше грошей', null);
//       return;
//     }
//     taskWhenReady(null, 'Єгипет');
//   }, 2000);
// }
//
//
// function prepareToTour(cb) {
//   setTimeout(() => {
//     console.log('Я забраввся!')
//     cb(null, 'Полетіли НАРЕШТІ !!!!');
//   }, 1000)
// }
//
// function doPhoto(cb) {
//   cb(null, 'ЩОЛК ЩОЛК')
// }
//
//
// orderTour(400, (err, tour) => {
//   if (err) {
//     console.log('Мала, треба їсти макарони');
//     console.log('В агенстві сказали що', err);
//     return;
//   }
//
//   console.log(`УРА. Лутимо в ${tour}`);
//
//   prepareToTour((err, data) => {
//     if (err) {
//       console.log('Бліне. Нема купальника (((');
//       return;
//     }
//
//     console.log(data);
//     doPhoto((err, data) => {
//       if (err) {
//         return
//       }
//       console.log(data);
//     })
//   })
// });
//
//
// orderTour(1000, (err, tour) => {
//   if (err || tour === 'Єгипет') {
//     console.log('Фу. Згнову Жгипет пропонують. АЦТОЙ');
//     return;
//   }
//   console.log('Єє бой. Берчдчиів !!!')
// });

function myDay(time){
    return new Promise((resolve, reject)=>{
        console.log('привіт мій друже! дякую що завітав')
        console.log('Зараз я розкажу тобі про свій день!')

        setTimeout(()=>{
            console.log('DAY START')
            if (time > 8){
                resolve('проспав');
                return;
            }
            reject( 'прокинувся вчасно, можна спокійно вставати');
        }, 2000)
    })

}
function bathroom (day){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            // if (day === 'bad'){
            //     resolve('НАДЗВИЧАЙНО ЩВИДКО');
            //     return
            // }
            reject('Спокійно вмиваюся, та чищу зуби.');
        },1000)
    }))
}
function breakfast(day){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            if (day === 'bad'){
                resolve('AAAAAAAAAAAA')
            } else {
                reject('готую сніданок ')
            }

        },3000)
    }))

}

function goJob(day,cb){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            if (day === 'bad'){
                resolve('AAAA')
            }else {
                reject('добираюся на роботку')
            }
        },500)
    }))

}
function work(day,cb){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            if (day==='bad'){
                resolve('AAAA')
            }else {
                reject('встигну');
            }
        },3000)
    }))

}
function dinner(day,cb){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            if (day==='bad'){
                resolve('AAAA')
            }else {
                reject('неймовірно смачний')
            }
        }, 500)
    }))

}
function hoHome(day){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            if (day==='bad'){
                resolve('AAA')
            }else {
                reject('з радості ')
            }
        }, 2000)
    }))

}


async function go(){
    try {
        let myday = await myDay(7);
        console.log(myday);
        let bathroom = await bathroom('');
        console.log(bathroom)
        let breakfast = await breakfast('bad');
        console.log(breakfast)
        let gojob = await goJob('');
        console.log(gojob)
        let work = await work('');
        console.log(work)
        let dinner = await dinner('');
        console.log(dinner)
        let home = hoHome('');
        console.log(home);
    }
    catch (e){
        console.log('*******************')
        console.log(e)
        console.log('*******************')
    }
}
go();




// myDay(9)
// .then((data)=>{
//     console.log(`Бляха я  ${data}`)
//
//     return bathroom('bad')
// })
// .then(thoose=>{
//     console.log(thoose + ' ЧИЩУ ЗУБИ')
//
//     return breakfast('bad')
// })
// .then(brak=>{
//     console.log(brak+' Я НЕ ВСТИГАЮ ПОСНІДАТИ')
//
//     return goJob('')
// })
// .then(omg=>{
//     console.log(omg + ' Я НЕ ВСТИГ НА АВТОБУС')
//
//     return work('bad');
// })
// .then(workTime=>{
//     console.log(workTime+ ' Я не ВСТИГАЮ ВИКОНАТИ ТАСКУ')
//
//     return dinner('bad');
// })
// .then(eat=>{
//     console.log(eat + ' Я НЕ ВСТИГАЮ ПОЇСТИ')
//
//     return hoHome('bad');
// })
// .then(drink=>{
//     console.log(drink + ' НАП*ЮСЯ ЗІ ВСЬОГО')
//     console.log('DAY OFF ^-^')
// })
// .catch(err=>{
//     console.log('=================')
//     console.log(err)
//     console.log('=================')
//
// })