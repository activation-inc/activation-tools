// --- 1. 定数とデータ定義（令和6年度/2024年度版） ---

// 協会けんぽ 標準報酬月額等級表 (健康保険・厚生年金共通)
// 報酬月額(min, max)に対する標準報酬月額(ssm)と等級
const standardMonthlySalaryBands = [
    { min: 0, max: 87999, ssm: 88000, grade: 1 },
    { min: 88000, max: 97999, ssm: 98000, grade: 2 },
    { min: 98000, max: 107999, ssm: 104000, grade: 3 },
    { min: 108000, max: 117999, ssm: 114000, grade: 4 },
    { min: 118000, max: 127999, ssm: 122000, grade: 5 },
    { min: 128000, max: 137999, ssm: 134000, grade: 6 },
    { min: 138000, max: 147999, ssm: 142000, grade: 7 },
    { min: 148000, max: 157999, ssm: 150000, grade: 8 },
    { min: 158000, max: 167999, ssm: 160000, grade: 9 },
    { min: 168000, max: 177999, ssm: 170000, grade: 10 },
    { min: 178000, max: 187999, ssm: 180000, grade: 11 },
    { min: 188000, max: 197999, ssm: 190000, grade: 12 },
    { min: 198000, max: 207999, ssm: 200000, grade: 13 },
    { min: 208000, max: 217999, ssm: 210000, grade: 14 },
    { min: 218000, max: 227999, ssm: 220000, grade: 15 },
    { min: 228000, max: 237999, ssm: 230000, grade: 16 },
    { min: 238000, max: 247999, ssm: 240000, grade: 17 },
    { min: 248000, max: 257999, ssm: 250000, grade: 18 },
    { min: 258000, max: 267999, ssm: 260000, grade: 19 },
    { min: 268000, max: 277999, ssm: 270000, grade: 20 },
    { min: 278000, max: 287999, ssm: 280000, grade: 21 },
    { min: 288000, max: 297999, ssm: 290000, grade: 22 },
    { min: 298000, max: 307999, ssm: 300000, grade: 23 },
    { min: 308000, max: 317999, ssm: 310000, grade: 24 },
    { min: 318000, max: 327999, ssm: 320000, grade: 25 },
    { min: 328000, max: 337999, ssm: 330000, grade: 26 },
    { min: 338000, max: 347999, ssm: 340000, grade: 27 },
    { min: 348000, max: 357999, ssm: 350000, grade: 28 },
    { min: 358000, max: 367999, ssm: 360000, grade: 29 },
    { min: 368000, max: 377999, ssm: 370000, grade: 30 },
    { min: 378000, max: 387999, ssm: 380000, grade: 31 },
    { min: 388000, max: 397999, ssm: 390000, grade: 32 },
    { min: 398000, max: 407999, ssm: 400000, grade: 33 },
    { min: 408000, max: 417999, ssm: 410000, grade: 34 },
    { min: 418000, max: 427999, ssm: 420000, grade: 35 },
    { min: 428000, max: 437999, ssm: 430000, grade: 36 },
    { min: 438000, max: 447999, ssm: 440000, grade: 37 },
    { min: 448000, max: 457999, ssm: 450000, grade: 38 },
    { min: 458000, max: 467999, ssm: 460000, grade: 39 },
    { min: 468000, max: 477999, ssm: 470000, grade: 40 },
    { min: 478000, max: 487999, ssm: 480000, grade: 41 },
    { min: 488000, max: 497999, ssm: 490000, grade: 42 },
    { min: 498000, max: 507999, ssm: 500000, grade: 43 },
    { min: 508000, max: 517999, ssm: 520000, grade: 44 },
    { min: 518000, max: 530000, ssm: 540000, grade: 45 },
    { min: 530001, max: 550000, ssm: 560000, grade: 46 },
    { min: 550001, max: 580000, ssm: 580000, grade: 47 },
    { min: 580001, max: 620000, ssm: 620000, grade: 48 },
    { min: 620001, max: 650000, ssm: 650000, grade: 49 },
    { min: 650001, max: 680000, ssm: 680000, grade: 50 },
    { min: 680001, max: 710000, ssm: 710000, grade: 51 },
    { min: 710001, max: 740000, ssm: 740000, grade: 52 },
    { min: 740001, max: 770000, ssm: 770000, grade: 53 },
    { min: 770001, max: 810000, ssm: 810000, grade: 54 },
    { min: 810001, max: 850000, ssm: 850000, grade: 55 },
    { min: 850001, max: 890000, ssm: 890000, grade: 56 },
    { min: 890001, max: 930000, ssm: 930000, grade: 57 },
    { min: 930001, max: 970000, ssm: 970000, grade: 58 },
    { min: 970001, max: 1010000, ssm: 1010000, grade: 59 },
    { min: 1010001, max: 1070000, ssm: 1070000, grade: 60 },
    { min: 1070001, max: 1130000, ssm: 1130000, grade: 61 },
    { min: 1130001, max: 1190000, ssm: 1190000, grade: 62 },
    { min: 1190001, max: 1250000, ssm: 1250000, grade: 63 },
    { min: 1250001, max: 1310000, ssm: 1310000, grade: 64 },
    { min: 1310001, max: 1370000, ssm: 1370000, grade: 65 },
    { min: 1370001, max: 1430000, ssm: 1430000, grade: 66 },
    { min: 1430001, max: Infinity, ssm: 1500000, grade: 67 } // 上限
];


// 健康保険料率 (協会けんぽ、本人負担分 令和6年度)
// careRateは介護保険料率（本人負担分、40歳以上の場合に加算）
// 全国平均的な料率を使用 (例として東京都の料率を使用)
const healthInsuranceRates = {
    rate: 0.04985, // 健康保険料率（東京都の例）
    careRate: 0.0080 // 介護保険料率（全国一律）
};

// 厚生年金保険料率 (本人負担分、令和6年度)
const pensionRate = 0.0915; // 18.3% の折半

// 国民年金保険料 (月額、令和6年度)
const kokunenPremiumMonthly = 16980;

// 国民健康保険料モデルデータ (令和6年度)
// 全国簡易モデルをデフォルトとして定義
const kokuhoModel = {
    baseKojo: 430000, // 基礎控除額（住民税の算出時）
    medical: {
        incomeRate: 0.0700, // 所得割率 (全国簡易モデル)
        perMember: 28000,  // 均等割額 (全国簡易モデル)
        limit: 650000      // 賦課限度額
    },
    support: { // 後期高齢者支援金分
        incomeRate: 0.0250, // 所得割率 (全国簡易モデル)
        perMember: 9000,   // 均等割額 (全国簡易モデル)
        limit: 220000      // 賦課限度額
    },
    care: { // 介護分 (40歳以上の場合)
        incomeRate: 0.0230, // 所得割率 (全国簡易モデル)
        perMember: 8000,   // 均等割額 (全国簡易モデル)
        limit: 170000      // 賦課限度額
    }
};

// 給与所得控除の計算関数 (令和2年分以降)
// 国税庁の速算表に基づき、より正確に計算
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

// 標準報酬月額を算出する関数 (今回は最低等級に固定するので直接は使用しないが、ロジックとして残す)
function getStandardMonthlySalary(monthlySalary) {
    for (const band of standardMonthlySalaryBands) {
        if (monthlySalary >= band.min && monthlySalary <= band.max) {
            return band.ssm;
        }
    }
    return standardMonthlySalaryBands[standardMonthlySalaryBands.length - 1].ssm;
}

// 社会保険料（健康保険、厚生年金、介護保険）を計算する関数
// ここでは、標準報酬月額を最低等級の88,000円に固定して計算する
function calculateSocialInsurancePremiumsFixedLow(age) {
    const ssm = 88000; // 最も低い標準報酬月額に固定
    const isCareRecipient = age >= 40; // 介護保険対象か

    const healthInsurance = ssm * healthInsuranceRates.rate;
    const careInsurance = isCareRecipient ? ssm * healthInsuranceRates.careRate : 0;
    const pensionInsurance = ssm * pensionRate;

    return {
        health: Math.round(healthInsurance + careInsurance), // 健康保険と介護保険を合算
        pension: Math.round(pensionInsurance)
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
        // 結果がNaN（数値ではない）になるのを防ぐため、数値チェックを追加
        if (isNaN(value) || value === null) {
            return '---'; // または適切な代替表示
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

    // 入力変更時のイベントリスナー
    // 入力値が変わったら、バリデーションを実行し、結果表示をクリアする
    annualIncomeInput.addEventListener('input', () => {
        validateAndShowError(annualIncomeInput, annualIncomeError, 0, undefined, '年収は0以上の数値を入力してください。');
        clearResults(); // 結果をクリア
    });
    ageInput.addEventListener('input', () => {
        validateAndShowError(ageInput, ageError, 0, 100, '年齢は0歳から100歳までの数値を入力してください。');
        clearResults(); // 結果をクリア
    });
    kokuhoMembersInput.addEventListener('input', () => {
        validateAndShowError(kokuhoMembersInput, kokuhoMembersError, 1, undefined, '国民健康保険加入者数は1以上の数値を入力してください。');
        clearResults(); // 結果をクリア
    });


    // 計算ボタンクリック時のイベントリスナー
    calculateButton.addEventListener('click', () => {
        let isValid = true;
        // 各入力フィールドのバリデーションを全て実行
        // `&& isValid` とすることで、前のバリデーションがfalseなら以降のチェックは行わない（結果的にisValidはfalseのまま）
        isValid = validateAndShowError(annualIncomeInput, annualIncomeError, 0, undefined, '年収は0以上の数値を入力してください。') && isValid;
        isValid = validateAndShowError(ageInput, ageError, 0, 100, '年齢は0歳から100歳までの数値を入力してください。') && isValid;
        isValid = validateAndShowError(kokuhoMembersInput, kokuhoMembersError, 1, undefined, '国民健康保険加入者数は1以上の数値を入力してください。') && isValid;

        // 全てのバリデーションが成功した場合のみ計算と結果表示を行う
        if (!isValid) {
            clearResults(); // バリデーションエラーがあれば結果をクリア
            return; // 計算処理を中断
        }

        const annualIncome = parseFloat(annualIncomeInput.value) * 10000; // 万円を円に変換
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