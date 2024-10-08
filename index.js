// 문제 1 . 클래스와 객체의 개념 이해
    /*
    클래스는 객체를 생성하기 위한 청사진으로, 객체의 속성과 메서드를 정의합니다. 객체는 클래스의 인스턴스입니다. 
    ES6에서 class 키워드를 사용하여 클래스를 정의할 수 있습니다.
    */
    class Car {
        constructor(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        startEngine() {
            console.log("Engine started.");
        }
    }

    const myCar = new Car("Hyundai", "Sonata", 2020);

    myCar.startEngine();

// 문제 2. 상속의 활용
    /* 
    - 자바스크립트에서 상속을 사용하여 클래스를 확장하는 방법: `class`문법을 통해 가능하다.
        `class`문법을 사용하면 객체 지향 프로그래밍의 상속을 보다 쉽게 구현할 수 있다.
    - 부모 클래스(상위클래스) : 다른 클래스가 상속받는 클래스
    - 자식 클래스(하위클래스) : 부모 클래스를 상속받아 기능을 확장하거나 수정하는 클래스 
    */
    class Animal {
        eat() {
            console.log("Eating...");
        }
    }

    class Dog extends Animal {
        bark() {
            console.log("Barking...");
        }
    }

    const myDog = new Dog();

    myDog.eat();    //Eating...
    myDog.bark();   // Barking...

// 3. 다형성의 개념
    /*
    다형성은 객체 지향 프로그래밍에서 같은 메서드 이름이지만 다른 클래스에서 다양한 방식으로 동작하는 것을 의미합니다.
    자바스크립트에서는 메서드 오버라이딩을 통해 다형성을 구현할 수 있습니다.
    이는 자식 클래스에서 부모 클래스의 메서드를 재정의하는 것을 의미합니다.
    */
    class Animal1 {
        makeSound() {
            console.log("Some sound...");
        }
    }

    class Cat1 extends Animal1 {
        makeSound() {
            console.log("야옹");
        }
    }

    class Dog1 extends Animal1 {
        makeSound() {
            console.log("멍멍");
        }
    }

    const animals = [new Cat1(), new Dog1()];
    animals.forEach(animal => animal.makeSound());

// 4. 추상화와 인터페이스
    /*
    추상화는 객체의 중요한 특징을 강조하고, 불필요한 세부 사항을 숨기는 과정입니다.
    자바스크립트에서는 추상 클래스를 명시적으로 제공하지 않지만, 이를 구현하기 위해 부모 클래스에 공통 메서드를 정의하고,
    자식 클래스에서 이를 재정의(오버라이딩) 할 수 있습니다.
    */
    class Animal2 {
        constructor(name) {
            if (this.constructor === Animal2) {
                throw new Error("Abstract class 'Animal' cannot be instantiated directly.");
            }
            this.name = name;
        }

        makeSound() {
            throw new Error("Abstract method 'makeSound' must be implemented by subclasses.");
        }
    }

    class Cat2 extends Animal2 {
        makeSound() {
            console.log(`${this.name} says: 야옹`);
        }
    }

    class Dog2 extends Animal2 {
        makeSound() {
            console.log(`${this.name} says: 멍멍`);
        }
    }

    const cat = new Cat2('고양이');
    const dog = new Dog2('강아지');

    cat.makeSound();    // 고양이 says: 야옹
    dog.makeSound();    // 강아지 says: 멍멍

// 5. 생성자 함수와 객체 생성
    /*
    생성자 함수는 객체를 초기화하는 역할을 하며, new키워드를 사용하여 호출됩니다.
    */
    function Animal3(name, sound) {
        this.name = name;
        this.sound = sound;

        this.makeSound = function() {
            console.log(`${this.name} makes a sound: ${this.sound}`);
        };
    }

    const lion = new Animal3('Lion', '어흥');
    lion.makeSound();   // Lion makes a sound: 어흥

// 6. Getter와 Setter 메서드
    /*
        Getter와 Setter 메서드는 객체의 속성에 접근하고 수정하는 방법입니다.
    */
    class Animal4 {
        constructor(name) {
            this._name = name;
        }
        get name() {
            return this._name;
        }

        set name(newName) {
            if (newName.length > 0) {
                this._name = newName;
            } else {
                console.log("유효하지 않습니다.");
            }
        }
    }

    const cat1 = new Animal4('고양이');
    console.log(cat1.name); // 고양이
    cat.name = '냥이';
    console.log(cat.name);  // 냥이
    cat.name = '';  // 유효하지 않습니다.

// 7. 함수형 프로그래밍의 특징
    /*
    - 함수형 프로그래밍(FP) 특징 :
        - 순수 함수: 동일한 입력에 대해 항상 동일한 출력을 반환하며, 외부상태를 변경하지 않습니다.
        - 불변성 : 데이터가 변경되지 않고 새로운 데이터를 생성합니다.
        - 고차 함수 : 함수를 인자로 받거나, 함수를 반환하는 함수입니다.

    - 장점 : 
        1. 코드의 가독성과 유지보수성이 향상됩니다.
        2. 상태 관리가 용이해집니다.        
    */
    
// 8. 순수 함수와 부수 효과
    // 순수함수 : 외부 상태에 의존하지 않고, 동일한 입력에 대해 항상 동일한 출력을 반환합니다.
    function add(a, b) {
        return a + b;
    }

    // 부수 효과가 있는 함수 : 외부 상태를 변경하거나 외부 상태에 의존합니다.
    let count = 0;
    function increment() {
        count += 1;
    }
    
// 9. 고차 함수의 활용
    // 고차 함수란? 함수를 인자로 받거나 함수를 반환하는 함수
    const numbers = [1, 2, 3, 4, 5];
    
    // map 예시
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); //[2, 4, 6, 8, 10]

    // filter 예시
    const evens = numbers.filter(num => num % 2 === 0);
    console.log(evens); // [2, 4]

    // reduce 예시
    const sum = numbers.reduce((acc,num) => acc + num, 0);
    console.log(sum);   // 15

// 10. 불변성 유지
    // 불변성을 유지하는 방법은 객체나 배열을 변경하지 않고 새로운 객체나 배열을 생성하는 것입니다.
    const originalArray = [1, 2, 3];

    // Spread 연산자를 사용하여 불변성 유지
    const newArray = [...originalArray, 4];
    console.log(newArray);  // [1, 2, 3, 4]
    console.log(originalArray); // [1, 2, 3]

// 11. 커링(Currying)
    // 커링은 여러 개의 인자를 받는 함수를 단일 인자를 받는 함수의 연속으로 변환하는 기법입니다.
    const makeAnimalSound = name => sound => `${name} makes a sound: ${sound}`;

    const catSound = makeAnimalSound('고양이');
    console.log(catSound('야옹'));

    const dogSound = makeAnimalSound('강아지');
    console.log(dogSound('멍멍'));

// 12. 함수 합성
    // 함수 합성은 여러 개의 함수를 결합하여 새로운 함수를 만드는 것입니다.
    const add1 = x => x + 1;
    const multiply = x => x * 2;

    const compose = (f,g) => x => f(g(x));

    const addThenMultiply = compose(multiply, add1);
    console.log(addThenMultiply(5));    // 12 (5 + 1 = 6, 6 * 2 = 12)

// 13. 모나드의 저주
    /*
    모나드의 저주란 모나드의 개념이 복잡하고 이해하기 어려운 이유를 설명합니다. 
    모나드는 부수 효과를 관리하고, 연산을 순차적으로 연결하는 구조입니다. 
    비유적으로, 모나드는 "상자"와 같아서, 상자 안에 값을 넣고 꺼내는 방식으로 상태를 관리합니다.
    */

// 14. 재귀 함수의 활용
    /* 재귀 함수는 함수가 자기 자신을 호출하는 함수입니다. 
    일반적으로 재귀 함수에는 종료 조건이 필요하며, 그렇지 않으면 무한 루프에 빠질 수 있습니다.
    */
    function factorial(n) {
        if ( n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    console.log(factorial(5));  // 120

// 15. 객체 지향 프로그래밍과 함수형 프로그래밍 비교
    /*
    1. 객체 지향 프로그래밍(OOP)
        - 특징 : 객체와 클래스 중심, 상태와 행동을 캡슐화
        - 장점 : 코드 재사용성, 유지보수 용이
        - 단점 : 복잡성 증가, 상속의 문제

    2. 함수형 프로그래밍(FP)
        - 특징 : 함수 중심, 상태 변화 최소화, 불변성 유지
        - 장점 : 코드의 가독성과 유지보수성 향상
        - 단점 : 성능 저하 가능성, 학습 곡선
    */

// 16. 오버라이딩과 오버로딩의 차이
    // 오버라이딩 : 자식 클래스에서 부모 클래스의 메서드를 재정의하는 것.
    class Animal5 {
        speak() {
            return '소리';
        }
    }

    class Cat5 extends Animal5 {
        speak() {
            return '야옹';
        }
    }

    const cat5 = new Cat5();
    console.log(cat5.speak());   // 야옹

// 17. 함수형 프로그래밍에서의 상태 관리
    /*
    함수형 프로그래밍에서 상태 관리는 불변성을 유지하고, 상태 변화를 최소화하는 방식으로 이루어집니다.
    상태를 변경하는 대신 새로운 상태를 반화하는 방식을 사용합니다.
    - 상태 변화를 최소화 하는 방법 :
        1. 상태를 직접 숮어하지 않고 복사본을 만들기
        2. 순수 함수만 사용하여 상태 변경을 제어하기
        3. 고차 함수를 사용하여 상태 관리 로직을 재사용
    */
    const animal = { name : '고양이', sound: '야옹' };

    const updateAnimal = (animal, newName) => {
        return { ...animal, name: newName };    // 불변성 유지
    };

    const updatedAnimal = updateAnimal(animal, '애옹이');
    console.log(updateAnimal);  // { name: '애옹이', sound: '야옹' }
    console.log(animal);    // { name: '고양이', sound: '야옹' }

// 18. 프로토타입 상속
    // 자바스크립트에서 프로토타입 상속은 객체가 다른 객체의 속성과 메서드를 상속받는 방법입니다.
    function Animal6(name) {
        this.name = name;
    }

    Animal6.prototype.speak = function() {
        return `${this.name}가 소리를 냅니다.`;
    };

    function Dog6(name) {
        Animal6.call(this, name);    // 부모 생성자 호출
    }

    // 프로토타입 상속
    Dog6.prototype = Object.create(Animal6.prototype);
    Dog6.prototype.constructor = Dog6;

    const dog1 = new Dog6('바둑이');
    console.log(dog1.speak());   // 바둑이가 소리를 냅니다.

// 19. Todo 리스트 함수형 프로그래밍 예제
    let todos = [];

    // 항목 추가
    const addTodo = (todos, todo) => [...todos, todo];

    // 항목 삭제
    const removeTodo = (todos,todo) => todos.filter(t => t !== todo);

    // 항목 완료 처리
    const completeTodo = (todos,todo) => todos.map(t => t === todo ? `${t} (완료)` :t);

    todos = addTodo(todos, '할 일1');
    todos = addTodo(todos, '할 일2');
    todos = addTodo(todos, '할 일3');
    todos = completeTodo(todos, '할 일1');
    todos = removeTodo(todos, '할 일2');

    console.log(todos);
