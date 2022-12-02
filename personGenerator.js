const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Пупкин",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 11,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Данила"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 11,
        "list": {     
            "id_1": "Александра",
            "id_2": "Алина",
            "id_3": "Елизавета",
            "id_4": "Аглая",
            "id_5": "Фекла",
            "id_6": "Светлана",
            "id_7": "Кристина",
            "id_8": "Диана",
            "id_9": "Ева",
            "id_10": "Елена",
            "id_11": "Гадя"
        }
    }`,

    lastNameMaleJson: `{
        "count": 11,
        "list": {     
           "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич",
            "id_11": "Петрович"
        }
      }`,
        lastNameFemaleJson: `{
        "count": 11,
        "list": {     
           "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никаноровна",
            "id_7": "Михайловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна",
            "id_11": "Петровна"
        }
    }`,

    professionJson: `{
        "count": 11,
        "list": {     
           "id_1": "слесарь",
            "id_2": "швея",
            "id_3": "техничка",
            "id_4": "автомеханик",
            "id_5": "доярка",
            "id_6": "шахтер",
            "id_7": "бульдозерист",
            "id_8": "лесоруб",
            "id_9": "медсестра",
            "id_10": "стюардесса",
            "id_11": "проводница"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
     //   console.log(obj);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
     //  console.log(obj.list[prop]);
        return obj.list[prop];

    },

    randomFirstName: function() {
        const FirstNameRandomNumber = Math.round(Math.random());
        const firstRandomName = ( FirstNameRandomNumber === 1) ?
            this.randomValue(this.firstNameMaleJson) :
            this.randomValue(this.firstNameFemaleJson);
        return firstRandomName;

    },

    randomProfession: function() {
        const randomProf = this.randomValue(this.professionJson);
        return randomProf;

    },

    getPerson: function () {
        this.person = {}; //создается пустой объект, который будет наполняться значениями, необходимыми для решения задачи
        this.person.firstName = this.randomFirstName(); //приходит имя, сгененрированное функцией randomFirstName()

        //блок определения пола
        const arrOfString = [...this.person.firstName]; // используя метод спред разбиваем пришедшее имя на массив букв
        lastElement = arrOfString.pop(); //определяем значение последнего значения массива
        const genderInit = (lastElement === 'а' || lastElement === 'я') ? //если имя заканчивается на "а" или на "я", предполагаем что это женское имя
            this.GENDER_FEMALE :
            this.GENDER_MALE;
        this.person.gender = (this.person.firstName === 'Никита' || this.person.firstName === 'Данила') ? // при определении женского имени исключаем нетипичные мужские имена, заканчивающиеся на букву а
            this.GENDER_MALE :
            genderInit;

        // блок генерации отчества. Используется тернарный оператор для обращению к списку женских и мужских отчеств, в зависимости от приходящего имени
        this.person.lastName = (this.person.gender === 'Мужчина') ?
            this.randomValue(this.lastNameMaleJson) :
            this.randomValue(this.lastNameFemaleJson);

        //блок генерации фамилии. В случае если приходит женоское имя, женская фамилия генерируется путем конкатенации буквы "а", если сгененрировано женское имя
        this.person.surname = (this.person.gender === 'Мужчина') ?
            this.randomValue(this.surnameJson) :
            this.randomValue(this.surnameJson) + 'а';


        //блок генерации года рождения. Ограничил диапазоном от 1900 до 2010 года включительно
        const randomVar = Math.round(Math.random());
        let random2 = Math.round(Math.random() * 100);
        let random3 = Math.round(Math.random() * 10)
        this.person.yearOfBirthday = (randomVar === 0) ?
            random2 = (random2 < 10) ? '190' + String(random2) : '19' + random2 :
            random3 = (random3 < 10) ? '200' + String(random3) : '20' + random3;


        //блок генерации профессии
       const initProfession = () => {
           var personGender = this.person.gender;
           let profession = this.randomProfession();
            let profGenderInit = function () {
                let arrOfProf = [...profession];
                let lastElementProf = arrOfProf.pop();
                let professionGender = (lastElementProf === 'а' || lastElementProf === 'я') ?
                    'Женщина' :
                    'Мужчина';
               return professionGender;
            };
            let professionGender = profGenderInit();
           if (personGender === professionGender) {
               return profession;
           } else {
               do {
                  profession = this.randomProfession();
                  professionGender = profGenderInit();
               } while (personGender !== professionGender);
           }
            return profession;

        };
        this.person.profession = initProfession();

        //блок генерации дня и месяца рождения
        const initBirthDay = () => {
            let initYear=parseInt(this.person.yearOfBirthday,10);
            let genMonth  = Math.round(Math.random()*12);
            genMonth = (genMonth === 0) ?
                genMonth =1:
                genMonth;//параметр, необходимый для расчета количества дней в месяце
            genMonthCorrect = genMonth + 1; // данная корректировка увязана с логикой выполнения функции initDaysInMonth, так как при исчислении  количества дней в месяце к аргументу месяц необходимо добавить +1
            genMonthCorrect = (genMonthCorrect > 12) ?
                genMonthCorrect = 1:
                genMonthCorrect;
            let initDaysInMonth = 33 - new Date(initYear, genMonth, 33).getDate();

            // Если установить несуществующую дату для какого-либо месяца (например 31 апреля), то в результате нашем объекте будет сохранено соответствующее число следующего месяца.
            //
            // Таким образом, для того, чтобы получить количество дней в указанном месяце, необходимо отнять результат вышеописанной операции из числа 33. То есть, если задать в качестве даты 33 апреля, в результате мы получим 1 мая.
                function monthConvert(genMonthCorrect) {
                    var month = new Array('', ' января', ' февраля', ' марта', ' апреля', ' мая',  ' июня', ' июля', ' августа', ' сентября', ' октября', ' ноября', ' декабря');
                    output  =month[genMonthCorrect];
                    return output;
                };
            let monthString = monthConvert(genMonthCorrect);
            let genDay = Math.round(Math.random()*initDaysInMonth);
            return genDay + monthString;
        };

        this.person.initBirthDay = initBirthDay();
        console.log(this.person);
        return this.person; //возвращаем массив из набора сгенерированных данных по персоне

    },


};
