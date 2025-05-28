// --- 1. 定数とデータ定義（令和7年度/2025年度版） ---

// 協会けんぽ 標準報酬月額等級表 (健康保険・厚生年金共通)
// 報酬月額(min, max)に対する標準報酬月額(ssm)と等級
const standardMonthlySalaryBands = [
    // 令和6年3月分(4月納付分)からの健康保険・厚生年金保険の保険料額表 (協会けんぽ) に基づく
    { min: 0, max: 62999, ssm: 58000, grade: 1 }, // 健康保険の最低等級
    { min: 63000, max: 72999, ssm: 68000, grade: 2 },
    { min: 73000, max: 82999, ssm: 78000, grade: 3 },
    { min: 83000, max: 92999, ssm: 88000, grade: 4 },
    { min: 93000, max: 101999, ssm: 98000, grade: 5 },
    { min: 102000, max: 109999, ssm: 104000, grade: 6 },
    { min: 110000, max: 118999, ssm: 114000, grade: 7 },
    { min: 119000, max: 126999, ssm: 122000, grade: 8 },
    { min: 127000, max: 138999, ssm: 134000, grade: 9 },
    { min: 139000, max: 146999, ssm: 142000, grade: 10 },
    { min: 147000, max: 154999, ssm: 150000, grade: 11 },
    { min: 155000, max: 164999, ssm: 160000, grade: 12 },
    { min: 165000, max: 174999, ssm: 170000, grade: 13 },
    { min: 175000, max: 184999, ssm: 180000, grade: 14 },
    { min: 185000, max: 194999, ssm: 190000, grade: 15 },
    { min: 195000, max: 204999, ssm: 200000, grade: 16 },
    { min: 205000, max: 214999, ssm: 210000, grade: 17 },
    { min: 215000, max: 224999, ssm: 220000, grade: 18 },
    { min: 225000, max: 234999, ssm: 230000, grade: 19 },
    { min: 235000, max: 244999, ssm: 240000, grade: 20 },
    { min: 245000, max: 254999, ssm: 250000, grade: 21 },
    { min: 255000, max: 264999, ssm: 260000, grade: 22 },
    { min: 265000, max: 274999, ssm: 270000, grade: 23 },
    { min: 275000, max: 284999, ssm: 280000, grade: 24 },
    { min: 285000, max: 294999, ssm: 290000, grade: 25 },
    { min: 295000, max: 304999, ssm: 300000, grade: 26 },
    { min: 305000, max: 314999, ssm: 310000, grade: 27 },
    { min: 315000, max: 324999, ssm: 320000, grade: 28 },
    { min: 325000, max: 334999, ssm: 330000, grade: 29 },
    { min: 335000, max: 344999, ssm: 340000, grade: 30 },
    { min: 345000, max: 354999, ssm: 350000, grade: 31 },
    { min: 355000, max: 364999, ssm: 360000, grade: 32 },
    { min: 365000, max: 374999, ssm: 370000, grade: 33 },
    { min: 375000, max: 384999, ssm: 380000, grade: 34 },
    { min: 385000, max: 394999, ssm: 390000, grade: 35 },
    { min: 395000, max: 404999, ssm: 400000, grade: 36 },
    { min: 405000, max: 414999, ssm: 410000, grade: 37 },
    { min: 415000, max: 424999, ssm: 420000, grade: 38 },
    { min: 425000, max: 434999, ssm: 430000, grade: 39 },
    { min: 435000, max: 444999, ssm: 440000, grade: 40 },
    { min: 445000, max: 454999, ssm: 450000, grade: 41 },
    { min: 455000, max: 464999, ssm: 460000, grade: 42 },
    { min: 465000, max: 474999, ssm: 470000, grade: 43 },
    { min: 475000, max: 484999, ssm: 480000, grade: 44 },
    { min: 485000, max: 494999, ssm: 490000, grade: 45 },
    { min: 495000, max: 504999, ssm: 500000, grade: 46 },
    { min: 505000, max: 514999, ssm: 520000, grade: 47 },
    { min: 515000, max: 530000, ssm: 540000, grade: 48 },
    { min: 530001, max: 550000, ssm: 560000, grade: 49 },
    { min: 550001, max: 580000, ssm: 580000, grade: 50 },
    { min: 580001, max: 620000, ssm: 620000, grade: 51 },
    { min: 620001, max: 650000, ssm: 650000, grade: 52 },
    { min: 650001, max: 680000, ssm: 680000, grade: 53 },
    { min: 680001, max: 710000, ssm: 710000, grade: 54 },
    { min: 710001, max: 740000, ssm: 740000, grade: 55 },
    { min: 740001, max: 770000, ssm: 770000, grade: 56 },
    { min: 770001, max: 810000, ssm: 810000, grade: 57 },
    { min: 810001, max: 850000, ssm: 850000, grade: 58 },
    { min: 850001, max: 890000, ssm: 890000, grade: 59 },
    { min: 890001, max: 930000, ssm: 930000, grade: 60 },
    { min: 930001, max: 970000, ssm: 970000, grade: 61 },
    { min: 970001, max: 1010000, ssm: 1010000, grade: 62 },
    { min: 1010001, max: 1070000, ssm: 1070000, grade: 63 },
    { min: 1070001, max: 1130000, ssm: 1130000, grade: 64 },
    { min: 1130001, max: 1190000, ssm: 1190000, grade: 65 },
    { min: 1190001, max: 1250000, ssm: 1250000, grade: 66 },
    { min: 1250001, max: 1310000, ssm: 1310000, grade: 67 },
    { min: 1310001, max: 1370000, ssm: 1370000, grade: 68 },
    { min: 1370001, max: 1430000, ssm: 1430000, grade: 69 },
    { min: 1430001, max: Infinity, ssm: 1500000, grade: 70 } // 上限
];


// 健康保険料率 (協会けんぽ、本人負担分 令和7年度/2025年度も同率の仮定)
// careRateは介護保険料率（本人負担分、40歳以上の場合に加算）
const healthInsuranceRates = {
    // rate: 0.04985, // 健康保険料率（東京都の例）
    rate: 0.05040, // 健康保険料率（大阪府の例）
    careRate: 0.0080 // 介護保険料率（全国一律、令和7年度も同率の仮定）
};

// 厚生年金保険料率 (本人負担分、令和7年度/2025年度も同率の仮定)
const pensionRate = 0.0915; // 18.3% の折半

// 国民年金保険料 (月額、令和7年度/2025年度)
const kokunenPremiumMonthly = 17510; // 令和7年度の金額に修正

// 国民健康保険料モデルデータ (令和7年度/2025年度も同率の仮定)
// 新宿区の令和6年度国民健康保険料率を参考としたモデル
const kokuhoModel = {
    baseKojo: 430000, // 基礎控除額（住民税の算出時）
    medical: {
        incomeRate: 0.0730, // 所得割率 (新宿区の例)
        perMember: 33000,  // 均等割額 (新宿区の例)
        limit: 670000      // 賦課限度額 (新宿区の例)
    },
    support: { // 後期高齢者支援金分
        incomeRate: 0.0250, // 所得割率 (新宿区の例)
        perMember: 11000,  // 均等割額 (新宿区の例)
        limit: 220000      // 賦課限度額 (新宿区の例)
    },
    care: { // 介護分 (40歳以上の場合)
        incomeRate: 0.0230, // 所得割率 (新宿区の例)
        perMember: 10000,  // 均等割額 (新宿区の例)
        limit: 170000      // 賦課限度額 (新宿区の例)
    }
};

// 給与所得控除の計算関数 (令和2年分以降)
function calculateSalaryIncomeDeduction(annualIncomeYen) {
    if (annualIncomeYen <= 1625000) {
        return Math.min(annualIncomeYen, 550000);
    } else if (annualIncomeYen <= 1800000) {
        return annualIncomeYen * 0.3 + 100000;
    } else if (annualIncomeYen <= 3600000) {
        return annualIncomeYen * 0.2 + 220000;
    } else if (annualIncomeYen <= 6600000) {
        return annualIncomeYen * 0.1 + 540000;
    } else if (annualIncomeYen <= 8500000) {
        return annualIncomeYen * 0.09 + 660000;
    } else {
        return 1950000; // 上限
    }
}


// --- 2. 計算ロジック ---

// 社会保険料（健康保険、厚生年金、介護保険）を計算する関数
// ここでは、社会保険加入後の保険料を**ご指定の固定値に合わせて**計算する
function calculateSocialInsurancePremiumsFixedLow(age) {
    // 健康保険料（介護保険含む）を固定値 2,970円に設定
    const healthInsuranceFixed = 2970; // ご指定の固定値
    
    // 厚生年金保険料を固定値 8,052円に設定
    const pensionInsuranceFixed = 8052; // ご指定の固定値

    // 介護保険は年齢による加算がないため、このまま固定値を返す
    // （もし2970円が介護保険を含まない健康保険料で、別途加算したい場合は調整が必要ですが、
    //   ここでは2970円が「介護保険込みの固定健康保険料」として扱うため、追加の加算はしません。）

    return {
        health: healthInsuranceFixed, // 固定値
        pension: pensionInsuranceFixed // 固定値
    };
}

// 国民健康保険料を計算する関数
function calculateKokuhoPremium(annualIncomeYen, age, kokuhoMembers) {
    const salaryIncomeDeduction = calculateSalaryIncomeDeduction(annualIncomeYen);
    const taxableIncome = Math.max(0, annualIncomeYen - salaryIncomeDeduction - kokuhoModel.baseKojo);

    let medicalComponent = Math.min(kokuhoModel.medical.limit, taxableIncome * kokuhoModel.medical.incomeRate + kokuhoModel.medical.perMember * kokuhoMembers);
    let supportComponent = Math.min(kokuhoModel.support.limit, taxableIncome * kokuhoModel.support.incomeRate + kokuhoModel.support.perMember * kokuhoMembers);
    let careComponent = 0;

    if (age >= 40) { // 40歳以上の場合のみ介護分を加算
        careComponent = Math.min(kokuhoModel.care.limit, taxableIncome * kokuhoModel.care.incomeRate + kokuhoModel.care.perMember * kokuhoMembers);
    }
    
    return Math.round((medicalComponent + supportComponent + careComponent) / 12); // 年間を月額に変換
}


// --- 3. イベントリスナーとDOM操作 ---

document.addEventListener('DOMContentLoaded', () => {
    const annualIncomeInput = document.getElementById('annualIncome');
    const ageInput = document.getElementById('age');
    const kokuhoMembersInput = document.getElementById('kokuhoMembers');
    const calculateButton = document.getElementById('calculateButton');

    const annualIncomeError = document.getElementById('annualIncomeError');
    const ageError = document.getElementById('ageError');
    const kokuhoMembersError = document.getElementById('kokuhoMembersError');

    const kokuhoBeforeEl = document.getElementById('kokuhoBefore');
    const kenpoAfterEl = document.getElementById('kenpoAfter');
    const kokunenBeforeEl = document.getElementById('kokunenBefore');
    const kouseiAfterEl = document.getElementById('kouseiAfter');
    const totalBeforeEl = document.getElementById('totalBefore');
    const totalAfterEl = document.getElementById('totalAfter');
    const reductionEffectEl = document.getElementById('reductionEffect');

    function formatCurrency(value) {
        if (isNaN(value) || value === null) {
            return '---';
        }
        return value.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY', minimumFractionDigits: 0 });
    }

    // バリデーション関数
    function validateAndShowError(inputElement, errorElement, min, max, message) {
        const value = parseFloat(inputElement.value);
        if (inputElement.value.trim() === '') {
            errorElement.textContent = '必須項目です。';
            inputElement.style.borderColor = '#e74c3c';
            return false;
        } else if (isNaN(value) || value < min || (max !== undefined && value > max)) {
            errorElement.textContent = message;
            inputElement.style.borderColor = '#e74c3c';
            return false;
        } else {
            errorElement.textContent = '';
            inputElement.style.borderColor = '#ddd';
            return true;
        }
    }

    // 結果表示をクリアする関数
    function clearResults() {
        kokuhoBeforeEl.textContent = '';
        kenpoAfterEl.textContent = '';
        kokunenBeforeEl.textContent = '';
        kouseiAfterEl.textContent = '';
        totalBeforeEl.textContent = '';
        totalAfterEl.textContent = '';
        reductionEffectEl.textContent = '';
    }

    annualIncomeInput.addEventListener('input', () => {
        validateAndShowError(annualIncomeInput, annualIncomeError, 0, undefined, '年収は0以上の数値を入力してください。');
        clearResults();
    });
    ageInput.addEventListener('input', () => {
        validateAndShowError(ageInput, ageError, 0, 100, '年齢は0歳から100歳までの数値を入力してください。');
        clearResults();
    });
    kokuhoMembersInput.addEventListener('input', () => {
        validateAndShowError(kokuhoMembersInput, kokuhoMembersError, 1, undefined, '国民健康保険加入者数は1以上の数値を入力してください。');
        clearResults();
    });


    calculateButton.addEventListener('click', () => {
        let isValid = true;
        isValid = validateAndShowError(annualIncomeInput, annualIncomeError, 0, undefined, '年収は0以上の数値を入力してください。') && isValid;
        isValid = validateAndShowError(ageInput, ageError, 0, 100, '年齢は0歳から100歳までの数値を入力してください。') && isValid;
        isValid = validateAndShowError(kokuhoMembersInput, kokuhoMembersError, 1, undefined, '国民健康保険加入者数は1以上の数値を入力してください。') && isValid;

        if (!isValid) {
            clearResults();
            return;
        }

        const annualIncome = parseFloat(annualIncomeInput.value) * 10000;
        const age = parseInt(ageInput.value);
        const kokuhoMembers = parseInt(kokuhoMembersInput.value);

        // --- 社会保険加入前の計算 ---
        const kokuhoPremiumBefore = calculateKokuhoPremium(annualIncome, age, kokuhoMembers);
        const kokunenPremiumBefore = kokunenPremiumMonthly * kokuhoMembers;

        const totalBefore = kokuhoPremiumBefore + kokunenPremiumBefore;

        // --- 社会保険加入後の計算 (最低等級に固定) ---
        const socialInsuranceAfter = calculateSocialInsurancePremiumsFixedLow(age);

        const kenpoAfter = socialInsuranceAfter.health;
        const kouseiAfter = socialInsuranceAfter.pension;
        const totalAfter = kenpoAfter + kouseiAfter;

        // --- 結果表示 ---
        kokuhoBeforeEl.textContent = formatCurrency(kokuhoPremiumBefore);
        kenpoAfterEl.textContent = formatCurrency(kenpoAfter);
        kokunenBeforeEl.textContent = formatCurrency(kokunenPremiumBefore);
        kouseiAfterEl.textContent = formatCurrency(kouseiAfter);
        totalBeforeEl.textContent = formatCurrency(totalBefore);
        totalAfterEl.textContent = formatCurrency(totalAfter);

        const reductionEffect = totalBefore - totalAfter;
        reductionEffectEl.textContent = formatCurrency(reductionEffect) + ' の削減';
    });
});
