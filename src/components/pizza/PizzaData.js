const pizzaKind = {
    masterPizza: "장인피자",
    expertPizza: "달인피자",
    luxuryPizza: "명품피자"
}

const pizzaData = [
    {
        name: "쉬림프&핫치킨골드피자",
        nameEnglish: "Shrimp & Hot Chicken Gold",
        imgPath: require("./img/master1.png"),
        description: "#알볼로직원선호도1위 #매콤함",
        kind: pizzaKind.masterPizza,
        priceL: 34500,
        priceR: 29000,
        topping1: "새우",
        topping2: "닭고기",
        topping3: ""
    },
    {
        name: "날개피자",
        nameEnglish: "FLYING PIZZA",
        imgPath: require("./img/master2.png"),
        description: "#수제마늘빵 #부르스케타",
        kind: pizzaKind.masterPizza,
        priceL: 34500,
        priceR: 29000,
        topping1: "수제마늘빵",
        topping2: "새우",
        topping3: "통옥수수"
    },
    {
        name: "어깨피자",
        nameEnglish: "Ukke Pizza / Super star Alvolo Pizza",
        imgPath: require("./img/expert1.png"),
        description: "#9가지맛 #인기메뉴 #한판에",
        kind: pizzaKind.expertPizza,
        priceL: 31500,
        priceR: 27000,
        topping1: "닭고기",
        topping2: "단호박",
        topping3: "새우"
    },
    {
        name: "꿈을피자",
        nameEnglish: "Ggumeul Pizza",
        imgPath: require("./img/expert2.png"),
        description: "#델루나피자 #불고기&바질 #고구마",
        kind: pizzaKind.expertPizza,
        priceL: 31500,
        priceR: 27000,
        topping1: "과일",
        topping2: "고구마",
        topping3: "소고기"
    },
    {
        name: "쏘핫피자 1단계",
        nameEnglish: "So Hot Pizza level 1",
        imgPath: require("./img/expert3.png"),
        description: "#매운맛 #1단계 #수미감자",
        kind: pizzaKind.expertPizza,
        priceL: 31500,
        priceR: 27000,
        topping1: "감자",
        topping2: "닭고기",
        topping3: ""
    },
    {
        name: "피자에'진'심피자&스페셜 카드",
        nameEnglish: "'Gin' Sim on Pizza & Special Card",
        imgPath: require("./img/luxury1.png"),
        description: "트러플 소스와 버섯, 불고기의 만남!",
        kind: pizzaKind.luxuryPizza,
        priceL: 37000,
        priceR: 32500,
        topping1: "소고기",
        topping2: "치즈",
        topping3: ""
    },
    {
        name: "피자에'진'심피자&굿즈",
        nameEnglish: "'Gin' Sim on Pizza & Goods",
        imgPath: require("./img/luxury2.png"),
        description: "트러플 소스와 버섯, 불고기의 만남!",
        kind: pizzaKind.luxuryPizza,
        priceL: 37000,
        priceR: 32500,
        topping1: "소고기",
        topping2: "치즈",
        topping3: ""
    },
    {
        name: "매운맛좀'바바라'피자&스페셜카드",
        nameEnglish: "Spicy 'Barbara' Pizza & Special Card",
        imgPath: require("./img/luxury3.png"),
        description: "메이저킹 소시지, 스파이시 치킨까지!",
        kind: pizzaKind.luxuryPizza,
        priceL: 37000,
        priceR: 32500,
        topping1: "닭고기",
        topping2: "감자",
        topping3: "치즈"
    }
];
export default pizzaData;