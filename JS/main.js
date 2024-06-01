let amountInput = document.querySelector("input");
let revertBtn = document.querySelector(".rev-btn");
let fromSelect = document.querySelector(".from");
let toSelect = document.querySelector(".to");
let convertBtn = document.querySelector(".conv-btn");
let result = document.querySelector(".result span");
let selectBox = document.querySelector(".select-box");
let myimg = document.querySelector("img");
let myFromImageDiv = document.querySelector(".image-from");
let myToImageDiv = document.querySelector(".image-to");
 

const COUNTRY_NAMES = {
    AED: "United Arab Emirates Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Dutch Guilders",
    AOA: "Angolan Kwanza",
    ARS: "Argentine Peso",
    AUD: "Australian Dollar",
    AWG: "Aruban Florin",
    AZN: "Azerbaijani Manat",
    BAM: "Bosnia-Herzegovina Convertible Mark",
    BBD: "Barbadian Dollar",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev",
    BHD: "Bahraini Dinar",
    BIF: "Burundian Franc",
    BMD: "Bermudian Dollar",
    BND: "Bruneian Dollar",
    BOB: "Bolivian Boliviano",
    BRL: "Brazilian Real",
    BSD: "Bahamian Dollar",
    BTN: "Bhutanese Ngultrum",
    BWP: "Botswanan Pula",
    BZD: "Belizean Dollar",
    CAD: "Canadian Dollar",
    CDF: "Congolese Franc",
    CHF: "Swiss Franc",
    CLF: "Chilean Unit of Account UF",
    CLP: "Chilean Peso",
    CNH: "Chinese Yuan Offshore",
    CNY: "Chinese Yuan",
    COP: "Colombian Peso",
    CUP: "Cuban Peso",
    CVE: "Cape Verdean Escudo",
    CZK: "Czech Republic Koruna",
    DJF: "Djiboutian Franc",
    DKK: "Danish Krone",
    DOP: "Dominican Peso",
    DZD: "Algerian Dinar",
    EGP: "Egyptian Pound",
    ERN: "Eritrean Nakfa",
    ETB: "Ethiopian Birr",
    EUR: "Euro",
    FJD: "Fijian Dollar",
    FKP: "Falkland Islands Pound",
    GBP: "British Pound Sterling",
    GEL: "Georgian Lari",
    GHS: "Ghanaian Cedi",
    GIP: "Gibraltar Pound",
    GMD: "Gambian Dalasi",
    GNF: "Guinean Franc",
    GTQ: "Guatemalan Quetzal",
    GYD: "Guyanaese Dollar",
    HKD: "Hong Kong Dollar",
    HNL: "Honduran Lempira",
    HRK: "Croatian Kuna",
    HTG: "Haitian Gourde",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Sheqel",
    INR: "Indian Rupee",
    IQD: "Iraqi Dinar",
    IRR: "Iranian Rial",
    ISK: "Icelandic Krona",
    JMD: "Jamaican Dollar",
    JOD: "Jordanian Dinar",
    JPY: "Japanese Yen",
    KES: "Kenyan Shilling",
    KGS: "Kyrgystani Som",
    KHR: "Cambodian Riel",
    KMF: "Comorian Franc",
    KPW: "North Korean Won",
    KRW: "South Korean Won",
    KWD: "Kuwaiti Dinar",
    KYD: "Caymanian Dollar",
    KZT: "Kazakhstani Tenge",
    LAK: "Laotian Kip",
    LBP: "Lebanese Pound",
    LKR: "Sri Lankan Rupee",
    LRD: "Liberian Dollar",
    LSL: "Basotho Maloti",
    LYD: "Libyan Dinar",
    MAD: "Moroccan Dirham",
    MDL: "Moldovan Leu",
    MGA: "Malagasy Ariary",
    MKD: "Macedonian Denar",
    MMK: "Myanma Kyat",
    MNT: "Mongolian Tugrik",
    MOP: "Macanese Pataca",
    MRU: "Mauritanian Ouguiya",
    MUR: "Mauritian Rupee",
    MVR: "Maldivian Rufiyaa",
    MWK: "Malawian Kwacha",
    MXN: "Mexican Peso",
    MYR: "Malaysian Ringgit",
    MZN: "Mozambican Metical",
    NAD: "Namibian Dollar",
    NGN: "Nigerian Naira",
    NOK: "Norwegian Krone",
    NPR: "Nepalese Rupee",
    NZD: "New Zealand Dollar",
    OMR: "Omani Rial",
    PAB: "Panamanian Balboa",
    PEN: "Peruvian Nuevo Sol",
    PGK: "Papua New Guinean Kina",
    PHP: "Philippine Peso",
    PKR: "Pakistani Rupee",
    PLN: "Polish Zloty",
    PYG: "Paraguayan Guarani",
    QAR: "Qatari Rial",
    RON: "Romanian Leu",
    RSD: "Serbian Dinar",
    RUB: "Russian Ruble",
    RWF: "Rwandan Franc",
    SAR: "Saudi Arabian Riyal",
    SCR: "Seychellois Rupee",
    SDG: "Sudanese Pound",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    SHP: "Saint Helena Pound",
    SLL: "Sierra Leonean Leone",
    SOS: "Somali Shilling",
    SRD: "Surinamese Dollar",
    SYP: "Syrian Pound",
    SZL: "Swazi Emalangeni",
    THB: "Thai Baht",
    TJS: "Tajikistani Somoni",
    TMT: "Turkmenistani Manat",
    TND: "Tunisian Dinar",
    TOP: "Tongan Pa'anga",
    TRY: "Turkish Lira",
    TTD: "Trinidad and Tobago Dollar",
    TWD: "Taiwan New Dollar",
    TZS: "Tanzanian Shilling",
    UAH: "Ukrainian Hryvnia",
    UGX: "Ugandan Shilling",
    USD: "United States Dollar",
    UYU: "Uruguayan Peso",
    UZS: "Uzbekistan Som",
    VND: "Vietnamese Dong",
    VUV: "Ni-Vanuatu Vatu",
    WST: "Samoan Tala",
    XAF: "CFA Franc BEAC",
    XCD: "East Caribbean Dollar",
    XDR: "Special Drawing Rights",
    XOF: "CFA Franc BCEAO",
    XPF: "CFP Franc",
    YER: "Yemeni Rial",
    ZAR: "South African Rand",
    ZMW: "Zambian Kwacha",
  };


let countryKeys = Object.keys(COUNTRY_NAMES);
// console.log(flagsKeys);
let countryValues = Object.values(COUNTRY_NAMES);
// console.log(flagsValus);


// Fill In Select with countries[options]
countryKeys.map((k)=>{
        // console.log(f);
        let resultKeys = `<option value=${k}>${k} || ${COUNTRY_NAMES[k]}</option>`
        fromSelect.innerHTML += resultKeys;
        toSelect.innerHTML += resultKeys;
})


// Fromselect onchange Event
fromSelect.addEventListener("change", ()=>{
  let selectValue = fromSelect.value.slice(0, 2)
  // console.log(selectValue);

  let myImage = `<img src=https://flagsapi.com/${selectValue}/shiny/32.png>`;

  myFromImageDiv.innerHTML = myImage;
})


// Toselect onchange Event
toSelect.addEventListener("change", ()=>{
  let toselectValue = toSelect.value.slice(0, 2)
  // console.log(toselectValue);

  let myImage = `<img src=https://flagsapi.com/${toselectValue}/shiny/32.png>`;

  myToImageDiv.innerHTML = myImage;
})



// Revert Button Event
revertBtn.addEventListener("click", ()=>{

    let fromSelectResult = fromSelect.value;
    let toSelectResult = toSelect.value;

    let myFromFlage =  myFromImageDiv.innerHTML;
    let myToFlage = myToImageDiv.innerHTML;


    toSelect.value = fromSelectResult;
    fromSelect.value = toSelectResult;
    myToImageDiv.innerHTML = myFromFlage;
    myFromImageDiv.innerHTML = myToFlage;
})


// Convert Event
convertBtn.addEventListener("click", ()=>{
    fetch(`https://v6.exchangerate-api.com/v6/0a62205ff7cdd73dfe2b0bf1/latest/${fromSelect.value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        // result.innerHTML = `${amountInput.value} ${data.base_code} = ${amountInput.value * data.conversion_rates[toSelect.value]} ${toSelect.value}`;
        if(isNaN(amountInput.value)){
          result.innerHTML = "Please Enter Valid Number";
        }else {
          result.innerHTML = `${amountInput.value === "" ? "1" : amountInput.value} ${data.base_code} = ${amountInput.value === "" ? "1" * (data.conversion_rates[toSelect.value]).toFixed(2) : (amountInput.value * data.conversion_rates[toSelect.value]).toFixed(2)} ${toSelect.value}`;
        }
    })
})












