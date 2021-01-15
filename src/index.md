<section class="col1">
<section class="title">
  <!-- ✅改行が必要なときはきりの良いところで改行する -->
  <h1 class="title_ja">真空蒸着した銅フタロシアニン薄膜の膜厚測定</h1>
  <!-- ✅名字と名前の間は半角スペースを起き、複数の著者の場合は間に全角のスペースを置く -->
  <div class="author">高専 太郎</div>
  <div class="title_en">Evaluation of Thickness of Copper Phthalocyanine Films Formed<br>by Vacuum Deposition</div>
  <!-- ✅名字はすべて大文字で書く -->
  <div class="author">Taro KOSEN</div>
</section>

<section class="abstract">
  <h2 class="nocounter">ABSTRACT</h2>
  <!-- ✅文と文の間は半角スペースを2つ -->
  <!-- ✅200語以内 -->
  <div class="text">
Copper phthalocyanine (CuPc) is often used in organic light emitting devices.&nbsp;&nbsp;We deposited CuPc films on silicon wafers by means of a vacuum deposition method.&nbsp;&nbsp;We then tried to estimate film thickness using a Fourier transformed infrared spectrometer.&nbsp;&nbsp;This method is applicable when the thickness is over several μm.&nbsp;&nbsp;The obtained thickness was compared with that measured with a surface profiler and the difference between the two methods is under 44 %.
  </div>
</section>

<section class="keywords">
  <h2 class="nocounter">KEYWORDS</h2>
  <!-- ✅5つ以内 -->
  <!-- ✅基本的には小文字 -->
  <ul class="content">
  <li>thin films</li>
  <li>copper phthalocyanine</li>
  </ul>
</section>
</section>

<!-- ✅フットノートに書く著者の所属は所属する専攻名（ * 機械・電子システム工学専攻など）を入れる -->
<span class="footnote affliation">機械・電子システム工学専攻</span>

## はじめに

近年、電子デバイスに応用される有機材料に注目が集まっている。特に有機発光デバイスは次世代のディスプレイ分野の候補として大きな期待が寄せられている。

銅フタロシアニン（CuPc）は有機電子材料の 1 つであり、比較的低温で昇華するため真空蒸着法により簡単に薄膜を作製できる。大向らはシリコンウエーハを基板として CuPc 薄膜を真空蒸着した際、分子の配列の異なる２層構造となりうることを示した<a class="ref" href="#2002ohmukai"></a>。また、光音響分光法により、1.128 eV に光吸収を示すことを見出している<a class="ref" href="#2001ohmukai"></a>。

## 実験方法

用いたシリコンウエーハは面方向（100）の p 型である。蒸発源と基板の距離は 7～28cm とした。原料となる CuPc は純度が 98.8 %の市販の試料を使用し、約 0.1g 程度充填した。蒸着を行なう容器内の圧力は $2 \times 10^{-5}$ Torr 以下であった。蒸着された膜の面積はおよそ $5\mathrm{cm}^{2}$ であった。本研究では FTIR としてパーキンエルマー社の System-2000 を使用した。また、比較のため触針型表面粗さ計を用いて膜厚を測定した。

## 実験結果及び考察

### 実験結果

#### Ｘ線回折

厚さの異なる 4 種類の試料を作製した。触針型表面粗さ計によって計測した膜厚が 1.7μｍ の試料の FTIR スペクトルを<a class="fig" href="#fig_cupc_ftir"></a> に示す。縦軸は透過率をとっている。

#### 波数

波数が $1700\mathrm{cm}^{-1}$ 以下の範囲では幅の狭い吸収ピークが多数観測されている。これは CuPc 分子内における結合の振動モードを示している。CuPc 薄膜は分子結晶であり分子内の結合に特に応力のかかる要素がないので、鋭いピークとなっている。これらのピークは本稿のテーマと直接関係は無い<a class="ref" href="#2002ohmukai"></a><a class="ref" href="#2003ohmukai"></a><a class="ref" href="#1998brown"></a><a class="ref" href="#1989kanamori"></a>。

### 実験結果２

<a class="fig" href="#fig_cupc_ftir"></a> の全体に周期が $1360\mathrm{cm}^{-1}$ のうねりが観測されている。これが CuPc 薄膜の干渉による縞である。これから膜厚を見積もると 1.5μｍ が得られた。この場合、誤差は 12 %である。

作製した 4 つの試料について、触針型表面粗さ計で測定した膜厚と FTIR の干渉縞から見積もった膜厚の関係を<a class="tab" href="#tab_thickness"></a> に示す。この表から FTIR により膜厚を見積もれることが分かる。誤差は 44 ％の範囲内に収まっている。

<figure>
  <img src="assets/images/cupc_ftir.png" alt="">
  <figcaption id="fig_cupc_ftir">CuPc 膜の FTIR スペクトル<br>（膜厚が 1.7μｍ の場合）</figcaption>
</figure>

<figure>
  <div class="caption" id="tab_thickness">試料の厚さと波数</div>
  <table>
    <tr class="header">
      <th class="center">試料</th>
      <th class="center">膜厚 (μｍ)</th>
      <th class="center">波数 (1/cm)</th>
    </tr>
    <tr>
      <td class="center">A</td>
      <td class="center">10</td>
      <td class="center">223</td>
    </tr>
    <tr>
      <td class="center">B</td>
      <td class="center">20</td>
      <td class="center">336</td>
    </tr>
    <tr>
      <td class="center">C</td>
      <td class="center">30</td>
      <td class="center">496</td>
    </tr>
    <tr>
      <td class="center">D</td>
      <td class="center">50</td>
      <td class="center">611</td>
    </tr>
  </table>
</figure>

## おわりに

真空蒸着法を用いて CuPc 薄膜をシリコンウエーハ上に堆積させてその膜厚を FTIR で観測される干渉縞触針型表面粗さ計ではマスクの存在する周囲の部分にさ計により得られた値と 44 ％以内の誤差で一致した。から見積もることを試みた。その結果、触針型表面粗おける局所的な段差を測定しており、膜全体の厚さを知りたい場合、むしろ FTIR による方がより適切であると考えられる。これはマスクの存在により周辺部が特に厚くなる傾向があるためであり、膜の厚さ及び粗さはそれぞれ、次式で表わされる。
$$
\Delta = 2.3 X- \frac{Y}{Z^2}
$$
$$
\delta = 5.6 X- \frac{Y}{Z^3}
$$

いずれにしても、FTIR を利用した膜厚の測定は赤外線を照射するだけの非破壊測定であるため、触針型表面粗さ計を用いた測定より望ましい。


## 参考文献 {.nocounter}

<ol class="reference">
<li id="2002ohmukai">M. Ohmukai, T. Uozumi, K. Takimoto and Y. Tsutsumi: “The thickness of copper phthalocyanine films”, Int. J. Mod. Phys., B16 (23), pp. 3459-3463 (2002).</li>
<li id="2001ohmukai">M. Ohmukai, H. Kubota and Y. Tsutsumi: “Photo-acoustic spectra from copper phthalocyanine films”, Mat. Res. Soc. Symp. Proc., 672, pp. O3.3.1-O3.3.5 (2001).</li>
<li id="2003ohmukai">大向雅人、久保田仁、堤保雄：“真空蒸着した銅フタロシアニン薄膜の膜厚測定”、明石高専研究紀要、第46号、29-31頁 (2003).</li>
<li id="1998brown">T. G. Brown and D. G. Hall: “Radiative Superlattices” in Light Emission in Silicon ed. D. J. Lockwood (Academic Press, 1998), pp. 153-205.</li>
<li id="1989kanamori">金森順次郎：「磁性」、培風館 (1989).</li>
</ol>
</section>

