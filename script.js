<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>社保チェッカー for 個人事業主</title> <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
    <style>
        /* ここに前回のCSSの全内容（モバイルUI改良版）を貼り付けます */
        /* ... 省略 ... */
    </style>
</head>
<body>
    <div class="container">
        <h1>社保チェッカー for 個人事業主</h1> <div class="input-grid">
            <div class="input-group">
                <label for="annualIncome">年収 (万円):</label>
                <input type="number" id="annualIncome" placeholder="例: 300" min="0">
                <div class="error-message" id="annualIncomeError"></div>
                <p class="help-text">税引前の年間の総収入額をご入力ください。</p>
            </div>
            <div class="input-group">
                <label for="age">年齢 (歳):</label>
                <input type="number" id="age" placeholder="例: 35" min="0" max="100">
                <div class="error-message" id="ageError"></div>
                <p class="help-text">介護保険料（40歳以上）の判定に使用します。</p>
            </div>
            <div class="input-group">
                <label for="kokuhoMembers">現在、国民健康保険に加入している世帯の人数 (ご自身と扶養家族):</label> <input type="number" id="kokuhoMembers" placeholder="例: 1" min="1">
                <div class="error-message" id="kokuhoMembersError"></div>
                <p class="help-text">現在、国民健康保険に加入している世帯の人数（ご自身と扶養家族）をご入力ください。</p> </div>
        </div>

        <div class="button-container">
            <button class="calculate-btn" id="calculateButton">計算する</button>
        </div>

        <div class="results-section">
            <h2>試算結果</h2>
            <table class="results-table">
                <thead>
                    <tr>
                        <th>項目</th>
                        <th>社会保険加入前 (月額)</th>
                        <th>社会保険加入後 (月額)</th>
                        <th>削減効果 (月額)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>国民健康保険料 (介護含む)</td> <td id="kokuhoBefore"></td>
                        <td id="kenpoAfter"></td>
                        <td rowspan="3" id="reductionEffect" class="highlight"></td>
                    </tr>
                    <tr>
                        <td>国民年金保険料</td> <td id="kokunenBefore"></td>
                        <td id="kouseiAfter"></td>
                    </tr>
                    <tr>
                        <td>**保険料合計**</td>
                        <td id="totalBefore" class="highlight"></td>
                        <td id="totalAfter" class="highlight"></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="notes">
            <p><strong>【ご注意事項】</strong></p>
            <p>※この計算は、令和6年度（2024年度）の保険料率を前提とした月額試算です。</p>
            <p>※本シミュレーションは、**個人事業主が社会保険（健康保険・厚生年金）に加入した場合**の保険料削減効果を試算するものです。</p> <p>※国民健康保険料は、ご入力いただいた年収から給与所得控除および基礎控除のみを考慮して簡易的に推定しています。</p>
            <p>※この国民健康保険料は、全国平均的なモデルに基づいています。お住まいの自治体によって計算方法や料率が大きく異なるため、あくまで目安としてご利用ください。</p>
            <p>※実際の保険料は、お住まいの自治体、ご加入の健康保険組合、扶養家族の状況、各種控除（住宅ローン控除、医療費控除、社会保険料控除など）、前年の所得などにより大きく異なります。</p>
            <p>※保険料率は毎年見直されます。</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
