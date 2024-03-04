// Second task
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName) {
    function findInCompany(company) {
        if (company.name === companyName) {
            return company;
        }
        for (let i = 0; i < (company.clients || []).length; i++) {
            let result = findInCompany(company.clients[i]);
            if (result) {
                return result;
            }
        }
        for (let i = 0; i < (company.partners || []).length; i++) {
            let result = findInCompany(company.partners[i]);
            if (result) {
                return result;
            }
        }
        return "Немає такої компанії";
    }
    return findInCompany(company);
}

let companyInfo = findValueByKey('Клієнт 1.2');
console.log(companyInfo);

