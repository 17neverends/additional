    let data = {
        "packages": [
            {
                "height": 10,
                "length": 10,
                "weight": 51,
                "width": 10,
                "type": "дверь-дверь"
            }
        ]
    };

    let boxData = {
        "Коробка XS": {
        "ширина": 17,
        "длина": 12,
        "высота": 9,
        "вес": 1,
        "стоимость": 20
        },
        "Коробка S": {
        "ширина": 23,
        "длина": 19,
        "высота": 10,
        "вес": 2,
        "стоимость": 40
        },
        "Коробка M": {
        "ширина": 33,
        "длина": 25,
        "высота": 15,
        "вес": 5,
        "стоимость": 60
        },
        "Коробка L": {
        "ширина": 31,
        "длина": 25,
        "высота": 38,
        "вес": 12,
        "стоимость": 70
        },
        "Коробка 1": {
        "ширина": 17,
        "длина": 12,
        "высота": 10,
        "вес": 1,
        "стоимость": 35
        },
        "Коробка 2": {
        "ширина": 24,
        "длина": 17,
        "высота": 10,
        "вес": 1,
        "стоимость": 50
        },
        "Коробка 3": {
        "ширина": 34,
        "длина": 24,
        "высота": 10,
        "вес": 2,
        "стоимость": 80
        },
        "Коробка 4": {
        "ширина": 24,
        "длина": 24,
        "высота": 21,
        "вес": 3,
        "стоимость": 90
        },
        "Коробка 5": {
        "ширина": 40,
        "длина": 24,
        "высота": 21,
        "вес": 5,
        "стоимость": 100
        },
        "Коробка 6": {
        "ширина": 40,
        "длина": 35,
        "высота": 28,
        "вес": 10,
        "стоимость": 150
        },
        "Коробка 7": {
        "ширина": 60,
        "длина": 35,
        "высота": 29,
        "вес": 15,
        "стоимость": 190
        },
        "Коробка 8": {
        "ширина": 47,
        "длина": 40,
        "высота": 43,
        "вес": 20,
        "стоимость": 200
        },
        "Коробка 9": {
        "ширина": 69,
        "длина": 39,
        "высота": 42,
        "вес": 30,
        "стоимость": 250
        }
    }
    

    class Result {
        constructor(
        field1 = false,
        field2 = false,
        field3 = false,
        field4 = false,
        field5 = false,
        field6 = false,
        field7 = [],
        ) {
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
        this.field4 = field4;
        this.field5 = field5;
        this.field6 = field6;
        this.field7 = field7;
        }

        logInfo() {
            console.log('Field 1:', this.field1);
            console.log('Field 2:', this.field2);
            console.log('Field 3:', this.field3);
            console.log('Field 4:', this.field4);
            console.log('Field 5:', this.field5);
            console.log('Field 6:', this.field6);
            console.log('Field 7:', this.field7);
        }
    }
    
    const result = new Result();


    const checkboxService1 = document.getElementById('service1');

    const checkboxService2 = document.getElementById('service2');
    const checkboxService3 = document.getElementById('service3');
    const checkboxService4 = document.getElementById('service4');

    const checkboxService5 = document.getElementById('service5');
    const checkboxService6 = document.getElementById('service6');
    const floorLift = document.getElementById('floorLift');
    const manualRadio = document.getElementById('manual');
    const liftRadio = document.getElementById('lift');
    const bubbleWrapMeters = document.getElementById('bubbleWrapMeters');
    const additionalCostElement = document.getElementById('additional_cost');
    checkboxService1.addEventListener('change', updateCost);

    checkboxService2.addEventListener('change', updateCost);
    checkboxService3.addEventListener('change', updateCost);
    checkboxService4.addEventListener('change', updateCost);

    checkboxService5.addEventListener('change', updateCost);
    checkboxService6.addEventListener('change', updateCost);
    floorLift.addEventListener('input', updateCost);
    manualRadio.addEventListener('change', updateCost);
    liftRadio.addEventListener('change', updateCost);
    bubbleWrapMeters.addEventListener('input', updateCost);
    const cost_2 = document.getElementById('service_2_p');
    const cost_3 = document.getElementById('service_3_p');
    const cost_5 = document.getElementById('service_5_p');
    const cost_6 = document.getElementById('service_6_p');
    const cost_7 = document.getElementById('service_7_p');
    const floorType = document.querySelector('input[name="floorType"]:checked');
    additionalCostElement.textContent = 'Доп. услуги не выбраны';
    let star = false;
    let height = 1050;
    let initialTotalCost = calculateInitialCost();
    let totalcost = initialTotalCost;

    function updateCost() {
        
        
        let additionalCost = 0;
        let box_cost = 0;
        if (checkboxService1.checked){
            result.field1 = true;
        } else {
            result.field1 = false;
        }

        if (checkboxService2.checked) {
            additionalCost += 10;
            cost_2.innerHTML = '10₽';
            result.field2 = '10₽';

        } else {
            cost_2.innerHTML = '';
            result.field2 = false;

        }

        if (checkboxService3.checked) {
            additionalCost += 50;
            cost_3.innerHTML = '50₽';
            result.field3 = '50₽';
        } else {
            cost_3.innerHTML = '';
            result.field3 = false;

        }


        if (checkboxService4.checked){
            result.field4 = true;
        } else {
            result.field4 = false;
        }

        if (checkboxService5.checked) {
            document.getElementById('bubbleWrapSection').style.display = 'block';   

        } else {
            document.getElementById('bubbleWrapSection').style.display = 'none';
            bubbleWrapMeters.value = '';
            cost_5.innerText = '';
            result.field5 = false;

        }

        if (checkboxService5.checked && bubbleWrapMeters.value.trim() !== "") {
            let metersValue = bubbleWrapMeters.value.trim();
            if (/^\d+$/.test(metersValue)) {
                const meters = parseInt(metersValue, 10);
        
                if (!isNaN(meters) && meters >= 0) {
                    additionalCost += meters * 70;
                    cost_5.innerText = `${meters * 70}₽`;
                    result.field5 = [`${meters * 70}₽`, meters + 'м'];

                } else {
                    cost_5.innerText = '';
                    bubbleWrapMeters.value = "";
                }
            } else {
                cost_5.innerText = '';
                bubbleWrapMeters.value = "";

            }
        }
        

        const floorLift = document.getElementById('floorLift');
        let status = document.getElementById('status_for_info');
        const weight = data.packages[0].weight;

        if (checkboxService6.checked) {
            if (weight <= 150) {
                acsentToTheFloor.style.display = 'block';
                status.style.display = 'none';
            } else {
                acsentToTheFloor.style.display = 'none';
                status.style.display = 'block';
                status.style.visibility = 'visible';
                floorLift.value = '';
                manualRadio.checked = false;
                liftRadio.checked = false;
                status.innerText = 'Обратитесь к менеджеру для индивидуального расчета';
            }
        } else {
            acsentToTheFloor.style.display = 'none';
            status.style.display = 'block';
            status.innerText = '';
            cost_6.innerText = '';
            floorLift.value = '';
            manualRadio.checked = false;
            liftRadio.checked = false;
            result.field6 = false;

        }

        const floorType = document.querySelector('input[name="floorType"]:checked');
        let cost = 0;
        if (checkboxService6.checked && floorType && floorLift.value.trim() !== "") {
            

            const floorsValue = floorLift.value.trim();
        
            if (/^\d+$/.test(floorsValue)) {
                const floors = parseInt(floorsValue, 10);
        
                if (!isNaN(floors) && floors >= 0) {

                    if (weight <= 30) {
                        status.style.display = 'block';
                        status.style.visibility = 'visible';
                        status.innerText = 'Доставка бесплатная';
                    } else {
                        if (floorType.value === "manual") {
                            if (weight >= 30 && weight <= 50) {
                                cost += 70 * floors;
                            } else if (weight <= 100) {
                                cost += 100 * floors;
                            } else if (weight <= 150) {
                                cost += 130 * floors;
                            } else if (weight >= 150) {
                                cost += 200 * floors;
                            }
                        } else {
                            if (weight >= 30 && weight <= 50) {
                                cost += 70;
                            } else if (weight <= 100) {
                                cost += 100;
                            } else if (weight <= 150) {
                                cost += 130;
                            } else {
                                cost += 1500;
                            }
                        }
                        totalcost += cost;
        
                        cost_6.innerText = `${cost}₽`;
                        result.field6 = [`${cost}₽`,floorsValue, floorType.value];

                    }
                } else {
                    floorLift.value = "";
                    cost_6.innerText = '';
                    result.field6 = false;

                }
            } else {
                floorLift.value = "";
                cost_6.innerText = '';
                result.field6 = false;

            }
        }
        

        const boxCountInputs = document.querySelectorAll('.box-count-input');
        box_cost = 0;

        boxCountInputs.forEach((countInput) => {
            const count = parseFloat(countInput.value) || 0;
            const boxName = countInput.closest('.box').querySelector('.box_name').textContent;

            if (count > 0) {
                box_cost += count * parseFloat(boxData[boxName].стоимость);
            } 
        });

        cost_7.innerText = box_cost > 0 ? `${box_cost}p.` : ''; 
        result.field7 = box_cost > 0 ? `${box_cost}p.` : false; ; 

        totalcost = initialTotalCost + additionalCost + box_cost + cost;

        if (totalcost > 0) {
            if (star) {
                additionalCostElement.textContent = `Стоимость доп. услуг: ${totalcost}₽*`;
            } else {
                additionalCostElement.textContent = `Стоимость доп. услуг: ${totalcost}₽`;
            }
        } else {
            additionalCostElement.textContent = 'Доп. услуги не выбраны';
        }

        document.querySelector('.main').style.height = `${height}px`;


    }
    const checkboxService7 = document.getElementById('service7');
    const boxesContainer = document.querySelector('.boxes');

    checkboxService7.addEventListener('change', showBoxOptions);

    function showBoxOptions() {
        const boxesContainer = document.getElementById('boxesContainer');
        boxesContainer.innerHTML = '';

        if (checkboxService7.checked) {
            height += 300;

            for (const boxName in boxData) {
                const box = boxData[boxName];

                if (
                    box.ширина > data.packages[0].width &&
                    box.длина > data.packages[0].length &&
                    box.высота > data.packages[0].height
                ) {
                    const boxElement = document.createElement('div');
                    boxElement.classList.add('box');

                    const boxNameElement = document.createElement('p');
                    boxNameElement.classList.add('box_name');
                    boxNameElement.textContent = boxName;

                    const boxDetailsElement = document.createElement('p');
                    boxDetailsElement.classList.add('box_details');
                    boxDetailsElement.textContent = `до ${box.вес} кг. (${box.ширина} x ${box.длина} x ${box.высота})`;

                    const boxCounterElement = document.createElement('div');
                    boxCounterElement.classList.add('box_counter');

                    const decreaseButton = document.createElement('button');
                    decreaseButton.classList.add('counter-button');
                    decreaseButton.textContent = '-';
                    decreaseButton.id = `decreaseButton`;

                    decreaseButton.addEventListener('click', () => updateBoxCount(boxName, -1));

                    const countInput = document.createElement('input');
                    countInput.classList.add('box-count-input');
                    countInput.type = 'text';
                    countInput.value = '0';
                    countInput.addEventListener('input', (event) => updateBoxCount(boxName, event.target.value));

                    const increaseButton = document.createElement('button');
                    increaseButton.classList.add('counter-button');
                    increaseButton.textContent = '+';
                    increaseButton.id = `increaseButton`;

                    increaseButton.addEventListener('click', () => updateBoxCount(boxName, 1));

                    boxCounterElement.appendChild(decreaseButton);
                    boxCounterElement.appendChild(countInput);
                    boxCounterElement.appendChild(increaseButton);

                    boxElement.appendChild(boxNameElement);
                    boxElement.appendChild(boxDetailsElement);
                    boxElement.appendChild(boxCounterElement);

                    boxesContainer.appendChild(boxElement);
                }
            }

            boxesContainer.style.display = 'grid';
        } else {
            boxesContainer.style.display = 'none';
            cost_7.innerText = '';
            updateCost();
            height -= 300;
            result.field7 = [];  
        }

        document.querySelector('.main').style.height = `${height}px`;
    }



    let globalResult = {
        field7: {}
    };
    function updateBoxCount(boxName, newValue) {
        const boxes = document.querySelectorAll('.box');
    
        for (const box of boxes) {
            const nameElement = box.querySelector('.box_name');
    
            if (nameElement && nameElement.textContent.includes(boxName)) {
                const countInput = box.querySelector('.box-count-input');
                let count = parseFloat(countInput.value) || 0;
    
                if (typeof newValue === 'number') {
                    count += newValue;
                } else {
                    count = parseFloat(newValue) || 0;
                }
    
                count = Math.max(0, count);
                countInput.value = count;
                if (count > 0) {
                    box.style.backgroundColor = '#30cc5f';
                } else {
                    box.style.backgroundColor = '';
                }
    
                updateCost();
    
                const selectedBoxData = boxData[boxName];
    
                if (typeof globalResult.field7 !== 'object' || globalResult.field7 === null) {
                    globalResult.field7 = {};
                }
    
                if (count > 0) {
                    globalResult.field7[boxName] = {
                        название: boxName,
                        размер: `${selectedBoxData.ширина} x ${selectedBoxData.длина} x ${selectedBoxData.высота}`,
                        вес: selectedBoxData.вес,
                        кол_во: count,
                        стоимость: count * selectedBoxData.стоимость
                    };
                } else {
                    delete globalResult.field7[boxName];
                }
    
                break;
            }
        }
    }

function submit_info() {
    result.logInfo();
    console.log(globalResult);

}



    function calculateInitialCost() {
        let totalcost = 0;
        let packageType = data.packages[0].type.toLowerCase();
        let weight = data.packages[0].weight;
        let doorLocation = '';
        let status = document.getElementById('floor_status');
        if (weight < 30 || weight > 150){
            return 0;
        } 
        const packageParts = packageType.split("-");
        if (packageParts.includes('дверь')) {
            if (packageParts[0].includes("дверь") && packageParts[1].includes("дверь")) {
                doorLocation = 'отправителя и получателя';
            } else if (packageParts[0].includes("дверь")) {
                doorLocation = 'отправителя';
            } else if (packageParts[1].includes("дверь")) {
                doorLocation = 'получателя';
            }
        }
        let cost = 0;
        let prr = 0;
        if (packageType.includes('дверь')) {
            let mult = 1;
            if (doorLocation === 'отправителя и получателя') {
                mult = 2;
            }

            if (weight >= 30 && weight <= 50) {
                cost += 300 * mult;
                prr += 300 * mult;
            } else if (weight > 50 && weight <= 75) {
                cost += 600 * mult;
                prr += 600 * mult;
            } else if (weight > 75 && weight <= 100) {
                cost += 1000 * mult;
                prr += 1000 * mult;
            } else if (weight > 100 && weight <= 150) {
                cost += 1500 * mult;
                prr += 1500 * mult;
            }
        }

        totalcost += cost;
        if (doorLocation) {
            status.style.display = 'block';
            status.style.visibility = 'visible';
            status.innerText = `*В стоимость включены погрузка-разгрузочные работы у ${doorLocation} (${prr}₽)`;
            star = true
        } else {
            status.style.display = 'none';
        }
        if (cost > 0) {
            if (star) {
                additionalCostElement.textContent = `Стоимость доп. услуг: ${totalcost}₽*`;

            } else {
                additionalCostElement.textContent = `Стоимость доп. услуг: ${totalcost}₽`;

            }
        } else {
            additionalCostElement.textContent = 'Доп. услуги не выбраны';
        }
        return cost;
    }


    window.onload = function () {
        calculateInitialCost();
    };
