const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
// Original, self-contained illustrations. Only these trusted SVG strings become markup.
// Each render namespaces its paint and clip IDs so repeated portraits stay independent.
const CUSTOM_AVATARS = {
  "svg-trader": {
    label: "Trader con gráficos de bolsa y criptomonedas", shortLabel: "Trader",
    svg: `
      <defs>
        <linearGradient id="@-bg" x2="1" y2="1"><stop stop-color="#102c3b"/><stop offset="1" stop-color="#245e62"/></linearGradient>
        <linearGradient id="@-skin" x2="1" y2="1"><stop stop-color="#efc49d"/><stop offset="1" stop-color="#bd8060"/></linearGradient>
        <linearGradient id="@-jacket" x2="1" y2="1"><stop stop-color="#354d62"/><stop offset="1" stop-color="#152b3c"/></linearGradient>
      </defs>
      <circle cx="120" cy="120" r="120" fill="url(#@-bg)"/>
      <circle cx="186" cy="45" r="54" fill="#74c7b5" opacity=".08"/>
      <g fill="none" stroke="#8cdbcc" stroke-width="1" opacity=".13">
        <path d="M15 45H225M8 73H232M3 101H237M4 129H236M18 157H222M43 20V175M77 6V175M111 1V175M145 3V175M179 16V175M213 38V175"/>
      </g>
      <rect x="139" y="54" width="91" height="92" rx="9" fill="#0d2635" stroke="#4f8d8c" stroke-width="1.5"/>
      <path d="M150 69H170M150 75H161" stroke="#9ddbcc" stroke-width="2" stroke-linecap="round" opacity=".6"/>
      <path d="M147 130L161 116L173 120L188 102L200 106L221 82" fill="none" stroke="#69d9b1" stroke-width="2.5" stroke-linejoin="round"/>
      <g stroke-width="1.5">
        <path d="M155 95V119M182 83V111M210 63V94" stroke="#70e0b8"/>
        <path d="M168 98V125M196 87V116" stroke="#ee9d93"/>
      </g>
      <g fill="#70e0b8"><rect x="152" y="100" width="6" height="12" rx="1"/><rect x="179" y="90" width="6" height="14" rx="1"/><rect x="207" y="72" width="6" height="15" rx="1"/></g>
      <g fill="#ee9d93"><rect x="165" y="104" width="6" height="13" rx="1"/><rect x="193" y="94" width="6" height="15" rx="1"/></g>
      <circle cx="35" cy="93" r="15" fill="#c49a51" stroke="#e9c985" stroke-width="1.5"/>
      <path d="M31 83V103M36 83V103M29 86H36Q44 86 39 92Q45 99 36 100H29M29 92H37" fill="none" stroke="#fff0bd" stroke-width="2"/>
      <path d="M21 240L31 192Q35 174 75 160H116Q153 167 168 199L187 240" fill="url(#@-jacket)"/>
      <path d="M76 147L74 166L95 187L117 164L113 143" fill="url(#@-skin)"/>
      <path d="M76 153Q93 166 114 151L114 160Q92 176 76 161" fill="#a76d54" opacity=".55"/>
      <path d="M75 162L94 177L117 161L126 240H67Z" fill="#e5f0ed"/>
      <path d="M91 183L100 183L104 192L99 199L108 237L96 249L85 236L92 199L87 192Z" fill="#4c9b99"/>
      <path d="M73 163L57 175L69 192L60 204L86 239L83 183ZM118 162L133 177L122 191L133 203L109 239L107 181Z" fill="#405e72"/>
      <path d="M52 211L46 239M144 209L156 239" stroke="#7591a0" stroke-opacity=".35" stroke-width="2"/>
      <path d="M125 201L143 198L145 207L127 209Z" fill="#a1d6c5"/>
      <ellipse cx="63" cy="115" rx="8" ry="13" fill="#c88c69"/>
      <ellipse cx="123" cy="113" rx="7" ry="12" fill="#bd8060"/>
      <path d="M64 82Q68 52 98 55Q129 59 124 99L120 130Q116 148 96 157Q75 152 67 134Z" fill="url(#@-skin)"/>
      <path d="M65 103L58 84Q54 55 78 47Q96 37 117 51Q138 54 126 95L119 105L116 78Q91 83 78 70L68 83Z" fill="#15252d"/>
      <path d="M65 64Q86 44 115 60M72 63Q91 54 109 63" fill="none" stroke="#40515a" stroke-width="3" stroke-linecap="round"/>
      <path d="M74 101L87 98M102 98L115 101" stroke="#2b3034" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M75 109Q81 105 87 108M102 108Q108 104 114 108" fill="none" stroke="#433c35" stroke-width="2"/>
      <g fill="#273238"><ellipse cx="82" cy="109" rx="2.2" ry="2.6"/><ellipse cx="108" cy="108" rx="2.2" ry="2.6"/></g>
      <path d="M95 110L91 125L98 126" fill="none" stroke="#ae7257" stroke-width="2" stroke-linecap="round"/>
      <path d="M83 135Q96 143 108 132Q97 137 83 135" fill="#713f36"/>
      <path d="M86 136Q96 140 105 134" fill="none" stroke="#fff1dc" stroke-width="2"/>
      <path d="M73 133Q82 150 96 152Q111 146 116 131" fill="none" stroke="#705440" stroke-width="3" opacity=".35"/>
      <path d="M172 172L181 163L190 172M181 164V189" fill="none" stroke="#94d9bc" stroke-width="2" stroke-linecap="round"/>
      <path d="M192 181H216M192 188H207" stroke="#94d9bc" stroke-width="2" stroke-linecap="round" opacity=".45"/>
    `
  },
  "svg-elegant": {
    label: "Mujer coreana elegante con cabello liso y moda moderna", shortLabel: "Elegante",
    svg: `
      <defs>
        <linearGradient id="@-bg" x2="1" y2="1"><stop stop-color="#f2d9cf"/><stop offset="1" stop-color="#b97578"/></linearGradient>
        <linearGradient id="@-hair" x2="1" y2=".3"><stop stop-color="#202735"/><stop offset=".5" stop-color="#363441"/><stop offset="1" stop-color="#171f2b"/></linearGradient>
        <linearGradient id="@-skin" x2=".9" y2="1"><stop stop-color="#ffe4ce"/><stop offset="1" stop-color="#dda58f"/></linearGradient>
        <linearGradient id="@-coat" x2="1" y2="1"><stop stop-color="#fff5e5"/><stop offset="1" stop-color="#d7c9c1"/></linearGradient>
      </defs>
      <circle cx="120" cy="120" r="120" fill="url(#@-bg)"/>
      <circle cx="146" cy="93" r="79" fill="#fff1da" opacity=".24"/>
      <g fill="none" stroke="#fff4e4" opacity=".35">
        <circle cx="120" cy="120" r="106"/>
        <path d="M19 146Q37 148 48 168M22 158Q39 159 43 174M196 44L204 50M200 40L200 54" stroke-width="2" stroke-linecap="round"/>
      </g>
      <path d="M58 185Q45 144 58 83Q62 40 102 35Q147 25 169 62Q188 104 172 195Z" fill="url(#@-hair)"/>
      <path d="M27 240L38 197Q46 178 91 165H145Q185 177 199 199L213 240" fill="url(#@-coat)"/>
      <path d="M97 143L94 170Q114 195 141 168L137 141" fill="url(#@-skin)"/>
      <path d="M98 148Q116 163 138 147L139 158Q119 174 96 158" fill="#b9746b" opacity=".28"/>
      <path d="M91 175Q116 190 145 172L158 240H82Z" fill="#25313b"/>
      <path d="M91 166L72 174L65 201L82 204L74 215L99 240L101 186ZM145 166L167 179L175 201L159 205L166 215L143 240L132 187Z" fill="#fff5e7"/>
      <path d="M47 207L41 240M186 210L195 240M77 182L84 195M158 184L150 197" stroke="#b7a8a2" stroke-width="1.5" fill="none"/>
      <path d="M101 176Q115 204 137 177" fill="none" stroke="#c59c59" stroke-width="2"/>
      <circle cx="119" cy="192" r="3" fill="#e8c67e"/>
      <path d="M77 80Q82 54 117 53Q153 56 155 91L151 129Q147 151 119 163Q94 158 81 137Z" fill="url(#@-skin)"/>
      <ellipse cx="78" cy="116" rx="7" ry="12" fill="#e7b098"/>
      <ellipse cx="154" cy="113" rx="6" ry="11" fill="#dda18b"/>
      <path d="M70 122Q58 65 93 48Q118 36 143 52Q162 62 159 99Q146 96 141 68Q117 87 82 88L81 123L71 151Z" fill="url(#@-hair)"/>
      <path d="M123 48Q88 51 76 82M129 52Q101 57 87 76" fill="none" stroke="#68616a" stroke-opacity=".45" stroke-width="2" stroke-linecap="round"/>
      <path d="M145 72Q156 115 147 148Q145 174 167 196Q177 151 164 95Z" fill="#222a36"/>
      <path d="M69 111Q61 157 77 186" fill="none" stroke="#6f5b61" stroke-width="2" opacity=".4"/>
      <path d="M87 103Q96 98 105 102M126 101Q136 96 145 101" fill="none" stroke="#514049" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M87 112Q96 106 105 111M125 110Q135 104 144 109" fill="none" stroke="#3f3541" stroke-width="2" stroke-linecap="round"/>
      <path d="M87 112L84 110M144 109L147 106" stroke="#3f3541" stroke-width="1.5" stroke-linecap="round"/>
      <g fill="#3e3540"><ellipse cx="97" cy="112" rx="2.7" ry="2.5"/><ellipse cx="135" cy="110" rx="2.7" ry="2.5"/></g>
      <g fill="#fff8ed"><circle cx="98" cy="111" r=".8"/><circle cx="136" cy="109" r=".8"/></g>
      <path d="M116 113L112 127Q115 130 120 127" fill="none" stroke="#c28c7c" stroke-width="1.8" stroke-linecap="round"/>
      <ellipse cx="94" cy="127" rx="10" ry="4" fill="#d88e8a" opacity=".25"/>
      <ellipse cx="139" cy="124" rx="9" ry="4" fill="#d88e8a" opacity=".25"/>
      <path d="M104 139Q114 133 127 136Q117 148 104 139" fill="#b46d74"/>
      <path d="M107 139Q116 141 124 137" fill="none" stroke="#ffe8d9" stroke-width="1.6"/>
      <g fill="none" stroke="#e0b974" stroke-width="2.5"><ellipse cx="78" cy="131" rx="5" ry="8"/><ellipse cx="155" cy="127" rx="4.5" ry="7"/></g>
      <g fill="#fff0c5"><circle cx="78" cy="121" r="2"/><circle cx="155" cy="118" r="2"/></g>
      <circle cx="159" cy="213" r="3" fill="#be9a61"/>
    `
  },
  "svg-slugger": {
    label: "Bateador inspirado en Juan Soto, con gorra y camiseta número 22", shortLabel: "Slugger 22",
    svg: `
      <defs>
        <linearGradient id="@-bg" x2="1" y2="1"><stop stop-color="#9ccee0"/><stop offset="1" stop-color="#416b9b"/></linearGradient>
        <linearGradient id="@-skin" x2="1" y2="1"><stop stop-color="#ca8c5e"/><stop offset="1" stop-color="#8d5039"/></linearGradient>
        <linearGradient id="@-jersey" x2="1" y2="1"><stop stop-color="#fff8e9"/><stop offset="1" stop-color="#c7d8de"/></linearGradient>
        <linearGradient id="@-bat" x2="1" y2="0"><stop stop-color="#c48e52"/><stop offset=".5" stop-color="#f0cf8d"/><stop offset="1" stop-color="#ad703c"/></linearGradient>
      </defs>
      <circle cx="120" cy="120" r="120" fill="url(#@-bg)"/>
      <circle cx="158" cy="68" r="72" fill="#e4f5f4" opacity=".2"/>
      <path d="M0 162Q112 113 240 150V240H0Z" fill="#244969" opacity=".5"/>
      <path d="M8 166Q118 128 238 153M5 177Q117 140 239 166" fill="none" stroke="#e8f1de" stroke-opacity=".25" stroke-width="2"/>
      <g fill="#dfece4" opacity=".45"><circle cx="24" cy="158" r="2"/><circle cx="42" cy="152" r="2"/><circle cx="64" cy="146" r="2"/><circle cx="186" cy="142" r="2"/><circle cx="207" cy="146" r="2"/><circle cx="223" cy="149" r="2"/></g>
      <g transform="rotate(-30 64 112)">
        <path d="M58 121L54 27Q54 18 62 17Q70 17 70 27L66 121Z" fill="url(#@-bat)"/>
        <path d="M59 121H65V153H59Z" fill="#223c52"/>
        <path d="M58 128H66M58 134H66M58 140H66M58 146H66" stroke="#8193a0" stroke-width="1.5"/>
        <rect x="56" y="151" width="12" height="4" rx="2" fill="#c69d6d"/>
        <path d="M59 29V99" stroke="#fff0bc" stroke-width="2" opacity=".5"/>
      </g>
      <path d="M104 145L143 136Q178 146 193 175L211 240H63L62 194Z" fill="url(#@-jersey)"/>
      <g fill="none" stroke="#456080" stroke-width="1" opacity=".4"><path d="M104 163L87 239M117 161L103 240M130 158L123 240M144 158L144 240M157 164L166 240M174 181L188 240"/></g>
      <path d="M103 141L101 156Q120 170 145 150L139 128" fill="url(#@-skin)"/>
      <path d="M98 151Q115 170 145 148L151 155Q119 182 94 158Z" fill="#1b3656"/>
      <path d="M146 158L144 240" stroke="#5e7487" stroke-width="2"/>
      <g fill="#718697"><circle cx="146" cy="182" r="1.6"/><circle cx="146" cy="204" r="1.6"/><circle cx="145" cy="226" r="1.6"/></g>
      <text x="153" y="215" font-family="Arial, sans-serif" font-size="35" font-weight="900" fill="#203d5c" stroke="#203d5c" stroke-width=".5">22</text>
      <path d="M156 168Q176 155 187 179L169 201Q155 209 138 193L93 164L106 146Z" fill="url(#@-jersey)" stroke="#91a8b6" stroke-width="1.5"/>
      <path d="M105 148L91 165L82 158L93 140Z" fill="#203d5c"/>
      <path d="M85 158Q69 161 59 143L70 131L99 146Z" fill="url(#@-skin)"/>
      <path d="M100 177L84 192Q70 197 59 182L38 151L55 138L79 164Z" fill="url(#@-jersey)" stroke="#91a8b6" stroke-width="1.5"/>
      <path d="M39 151L55 138L62 149L46 162Z" fill="#203d5c"/>
      <path d="M42 148L35 138Q32 131 39 126L49 122Q57 122 60 130L64 140L54 153Z" fill="#f4f1df" stroke="#8399a9" stroke-width="1.5"/>
      <path d="M59 139L52 127Q49 120 55 116L65 112Q72 113 75 121L79 131L71 141Z" fill="#fff9e8" stroke="#8399a9" stroke-width="1.5"/>
      <path d="M39 133L53 129M56 122L70 118M48 139L56 136M64 128L72 125" stroke="#a5b1b5" stroke-width="1.5"/>
      <path d="M90 77Q94 54 124 55Q156 58 156 88L150 118Q143 140 121 145Q101 139 93 119Z" fill="url(#@-skin)"/>
      <ellipse cx="151" cy="102" rx="7" ry="11" fill="#a66547"/>
      <path d="M94 92L89 103L84 83L90 68L102 69Z" fill="#26313b"/>
      <path d="M83 77Q78 39 111 32Q146 25 157 58L159 73L118 81Z" fill="#1b3657"/>
      <path d="M90 55Q97 36 119 37M133 38Q148 46 149 62" fill="none" stroke="#526d88" stroke-width="2"/>
      <path d="M90 68Q124 55 159 69L177 81Q179 87 168 87L128 80L89 83Z" fill="#132c47"/>
      <path d="M93 69Q127 58 157 70" fill="none" stroke="#6e859b" stroke-width="2"/>
      <path d="M118 43Q107 38 107 46Q107 51 118 51Q127 53 120 59L108 57" fill="none" stroke="#f1dfbd" stroke-width="3" stroke-linecap="round"/>
      <path d="M100 93L112 91M130 90L141 94" stroke="#402d29" stroke-width="3" stroke-linecap="round"/>
      <g fill="#2b2d30"><ellipse cx="108" cy="99" rx="2.5" ry="2.6"/><ellipse cx="136" cy="100" rx="2.5" ry="2.6"/></g>
      <path d="M121 100L116 113L124 115" fill="none" stroke="#8f543e" stroke-width="2" stroke-linecap="round"/>
      <path d="M109 124Q121 130 133 121" fill="none" stroke="#603b32" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M103 120L99 116M139 115L144 112" stroke="#293949" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M105 132Q122 146 138 128" fill="none" stroke="#503c32" stroke-width="3" opacity=".55"/>
      <circle cx="202" cy="99" r="11" fill="#fff7e4"/>
      <path d="M197 90Q205 99 197 108M208 91Q200 99 208 107" fill="none" stroke="#ba6860" stroke-width="1.4" stroke-dasharray="2 2"/>
    `
  },
  "svg-shuffle": {
    label: "Pelotero inspirado en Juan Soto celebrando con el Soto Shuffle y número 22", shortLabel: "Shuffle 22",
    svg: `
      <defs>
        <linearGradient id="@-bg" x2="1" y2="1"><stop stop-color="#f4ca85"/><stop offset="1" stop-color="#c77858"/></linearGradient>
        <linearGradient id="@-skin" x2="1" y2="1"><stop stop-color="#d39464"/><stop offset="1" stop-color="#94523b"/></linearGradient>
        <linearGradient id="@-jersey" x2="1" y2="1"><stop stop-color="#fff7df"/><stop offset="1" stop-color="#d9d8c7"/></linearGradient>
        <linearGradient id="@-helmet" x2="1" y2="1"><stop stop-color="#375570"/><stop offset="1" stop-color="#142b44"/></linearGradient>
      </defs>
      <circle cx="120" cy="120" r="120" fill="url(#@-bg)"/>
      <circle cx="101" cy="77" r="68" fill="#ffe6b5" opacity=".28"/>
      <path d="M0 185Q113 150 240 180V240H0Z" fill="#995b4a" opacity=".3"/>
      <path d="M22 197Q109 168 215 191" fill="none" stroke="#ffe5b8" stroke-width="2" opacity=".5"/>
      <g fill="none" stroke="#fff0c9" stroke-width="3" stroke-linecap="round"><path d="M37 71L28 61M48 52L43 40M176 52L186 42M184 68L199 62M26 99H41"/></g>
      <g fill="#213b53" opacity=".65"><path d="M54 29L57 23L61 29L58 35Z"/><path d="M203 91L207 86L210 93L206 98Z"/><path d="M181 114L185 108L189 115L185 121Z"/></g>
      <path d="M95 173L130 174L133 195L107 226L80 247L59 232L84 205Z" fill="url(#@-jersey)" stroke="#b4b6aa" stroke-width="1.5"/>
      <path d="M126 177L149 175L176 201L186 230L165 239L148 214L121 204Z" fill="url(#@-jersey)" stroke="#b4b6aa" stroke-width="1.5"/>
      <path d="M78 226L65 240M172 225L179 239" stroke="#263e56" stroke-width="10"/>
      <path d="M89 105Q109 93 135 103L154 134L151 180Q127 194 92 179L85 139Z" fill="url(#@-jersey)"/>
      <g stroke="#526c7e" stroke-width=".8" opacity=".4"><path d="M98 117L99 176M110 119L112 181M122 119L125 182M135 122L139 180M145 136L147 177"/></g>
      <path d="M96 176Q124 187 151 176L151 184Q124 194 95 183Z" fill="#263e56"/>
      <rect x="120" y="182" width="10" height="7" rx="1" fill="#c6a66e"/>
      <path d="M107 96L105 109Q117 122 134 106L130 91" fill="url(#@-skin)"/>
      <path d="M102 107Q117 121 135 105L139 111Q119 132 99 113Z" fill="#213e58"/>
      <path d="M121 121L125 180" stroke="#7f8b89" stroke-width="1.5"/>
      <text x="99" y="163" font-family="Arial, sans-serif" font-size="31" font-weight="900" fill="#243f58" stroke="#243f58" stroke-width=".5">22</text>
      <path d="M92 111Q79 108 73 126L62 145L46 130L34 141L54 164Q65 174 77 163L98 139Z" fill="url(#@-skin)"/>
      <path d="M91 108Q78 109 71 124L85 140L99 131Z" fill="url(#@-jersey)" stroke="#bdc0b3" stroke-width="1.5"/>
      <path d="M72 127L84 140" stroke="#233f58" stroke-width="5"/>
      <path d="M40 139L31 129Q28 124 32 119L37 115Q42 112 47 117L53 125L49 134Z" fill="#fcf3db" stroke="#829391" stroke-width="1.5"/>
      <path d="M35 122L42 130M40 118L47 125" stroke="#b3b7a9" stroke-width="1.5"/>
      <path d="M142 111Q152 109 160 126L173 146L192 137L200 151L176 166Q166 172 157 160L137 137Z" fill="url(#@-skin)"/>
      <path d="M141 108Q156 107 164 128L148 140L135 125Z" fill="url(#@-jersey)" stroke="#bdc0b3" stroke-width="1.5"/>
      <path d="M148 139L163 128" stroke="#233f58" stroke-width="5"/>
      <g transform="rotate(-25 199 160)">
        <path d="M196 137H202V170H196Z" fill="#213c54"/>
        <path d="M196 148H202M196 154H202M196 160H202" stroke="#93a1a3" stroke-width="1.5"/>
        <path d="M196 170L191 218Q190 228 199 228Q208 228 207 218L202 170Z" fill="#dfb375"/>
        <path d="M196 180L195 216" stroke="#ffdea1" stroke-width="2"/>
      </g>
      <path d="M189 143L187 133Q187 127 192 126L201 127Q207 128 207 135L205 145L197 153Z" fill="#fff6df" stroke="#829391" stroke-width="1.5"/>
      <path d="M193 133L203 135M192 138L203 140" stroke="#b3b7a9" stroke-width="1.5"/>
      <path d="M94 59Q99 37 125 40Q151 44 149 72L141 94Q131 111 115 109Q95 102 93 85Z" fill="url(#@-skin)"/>
      <path d="M93 76Q83 53 94 35Q110 17 134 27Q156 32 157 58L149 73L135 60L104 64L104 84L94 87Z" fill="url(#@-helmet)"/>
      <path d="M97 42Q111 25 132 34" fill="none" stroke="#a0bbc7" stroke-opacity=".65" stroke-width="3" stroke-linecap="round"/>
      <path d="M101 57Q128 46 151 58L167 67Q170 72 158 73L130 67L104 70Z" fill="#183149"/>
      <path d="M104 57Q130 49 149 58" fill="none" stroke="#6e8ba2" stroke-width="1.8"/>
      <path d="M123 35Q114 31 114 38Q115 41 122 41Q129 43 123 48L115 46" fill="none" stroke="#f4dfb4" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="99" cy="79" rx="4" ry="7" fill="#182e44" stroke="#4c6576"/>
      <path d="M109 76L118 73M130 75L140 78" stroke="#4c322b" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M109 81Q113 77 118 80M130 81Q135 78 139 82" fill="none" stroke="#322f2c" stroke-width="2" stroke-linecap="round"/>
      <path d="M124 80L121 89L126 90" fill="none" stroke="#9b5d43" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M111 94Q124 107 136 94Z" fill="#704233"/>
      <path d="M114 95H133L130 98H117Z" fill="#fff3d9"/>
      <path d="M104 88L109 89M139 88L143 87" stroke="#33414b" stroke-width="3" stroke-linecap="round"/>
      <path d="M57 193L48 200M64 199L55 208M192 182L202 187" stroke="#ffedc5" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    `
  }
};
const AVATARS = [...Object.keys(CUSTOM_AVATARS), "🦁", "🦅", "🐺", "🦊", "🐯", "🦈", "🚀", "👑"];
let avatarRenderId = 0;

function renderAvatar(avatar) {
  const illustration = Object.hasOwn(CUSTOM_AVATARS, avatar) && CUSTOM_AVATARS[avatar];
  if (!illustration) return `<span class="avatar-emoji" aria-hidden="true">${escapeHTML(avatar)}</span>`;
  const id = `portrait-${++avatarRenderId}`;
  return `<svg class="avatar-art" data-avatar="${avatar}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" aria-hidden="true" focusable="false">
    <defs><clipPath id="${id}-clip"><circle cx="120" cy="120" r="120"/></clipPath></defs>
    <g clip-path="url(#${id}-clip)">${illustration.svg.replaceAll("@-", `${id}-`)}</g>
    <circle cx="120" cy="120" r="118.5" fill="none" stroke="#fff4df" stroke-opacity=".22" stroke-width="3"/>
  </svg>`;
}

const LEVEL_INFO = {
  A1: { title: "Principiante (A1)", desc: "Saludos, presente simple y vocabulario esencial.", immersion: false },
  A2: { title: "Elemental (A2)", desc: "Rutinas, pasado simple y conversaciones cotidianas.", immersion: false },
  B1: { title: "Intermedio (B1)", desc: "Experiencias, opiniones y condicionales básicos.", immersion: false },
  B2: { title: "Upper-Intermediate (B2)", desc: "100% English: Phrasal verbs & natural phrasing.", immersion: true },
  C1: { title: "Advanced (C1)", desc: "100% English: Idioms, nuance & executive fluency.", immersion: true },
  C2: { title: "Mastery (C2)", desc: "100% English: Near-native rhetoric & precision.", immersion: true }
};

const TEST_BANK = {
  A1: [
    { q: "Completa: 'She ___ a doctor at the hospital.'", opts: ["am", "is", "are", "be"], ans: 1, exp: "Con 'She' usamos 'is'." },
    { q: "Escucha y traduce:", audio: "Where is the nearest train station?", opts: ["¿A qué hora sale el tren?", "¿Dónde está la estación de tren más cercana?", "¿Cuánto cuesta el boleto?", "¿El tren va al centro?"], ans: 1, exp: "'Where is the nearest...' pregunta dónde queda lo más cercano." }
  ],
  A2: [
    { q: "Pasado simple: 'Yesterday we ___ to the beach.'", opts: ["go", "gone", "went", "going"], ans: 2, exp: "'Went' es el pasado irregular de 'go'." },
    { q: "Escucha y responde:", audio: "How long have you lived in this city?", opts: ["For about five years.", "Yes, I live here.", "At 8 o'clock.", "Because it is big."], ans: 0, exp: "'How long' pregunta por duración de tiempo." }
  ],
  B1: [
    { q: "Segundo condicional: 'If I ___ more time, I would travel.'", opts: ["have", "had", "will have", "would have"], ans: 1, exp: "If + pasado simple ('had') + would." },
    { q: "¿Qué significa 'call off' en 'They had to call off the meeting'?", opts: ["Posponerla", "Cancelarla", "Llamar", "Empezarla"], ans: 1, exp: "'Call off' significa cancelar." }
  ],
  B2: [
    { q: "'By the time we arrived, the flight ___.'", opts: ["already left", "had already taken off", "has left", "leaves"], ans: 1, exp: "Past Perfect describes an action completed before another past event." },
    { q: "Listen and identify intent:", audio: "I'd rather you didn't mention this until the deal is signed.", opts: ["Announce the deal.", "Keep it confidential for now.", "Cancel the deal.", "Ask when it will be signed."], ans: 1, exp: "'I'd rather you didn't...' politely asks someone not to do something." }
  ],
  C1: [
    { q: "'___ had the CEO finished speaking than the stock surged.'", opts: ["Hardly", "No sooner", "Scarcely", "Not only"], ans: 1, exp: "'No sooner ... than' expresses immediate sequence." },
    { q: "What does 'bite the bullet' mean?", opts: ["Reject an offer", "Endure a difficult situation with courage", "Make a reckless choice", "Fire someone"], ans: 1, exp: "'Bite the bullet' means facing an unpleasant task bravely." }
  ],
  C2: [
    { q: "'He claims to be an expert, ___ his analysis misses the point.'", opts: ["albeit", "notwithstanding", "yet", "moreover"], ans: 2, exp: "'Yet' introduces a sharp, concise contrast." },
    { q: "Complete: 'A ___ victory; the legal fees exceeded the settlement.'", opts: ["pyrrhic", "resounding", "hollow", "unanimous"], ans: 0, exp: "A 'pyrrhic victory' is won at too great a cost." }
  ]
};

const LESSONS = {
  A1: [
    { type: "vocab", prompt: "Escucha y traduce:", english: "I wake up early every morning to exercise.", options: ["Me levanto temprano cada mañana para hacer ejercicio.", "Duermo hasta tarde.", "Trabajo de noche.", "Desayuno café."], answer: 0, explanation: "'Wake up early' = levantarse temprano." },
    { type: "build", prompt: "Ordena la oración:", spanish: "Ella trabaja en una empresa internacional.", words: ["She", "works", "at", "an", "international", "company."], explanation: "Tercera persona singular lleva '-s' en presente ('works')." },
    { type: "speak", prompt: "Pronuncia en inglés:", english: "I am learning English with my family.", explanation: "Pronuncia claro: 'Ai am ler-ning In-glish uid mai fa-mi-li'." }
  ],
  A2: [
    { type: "vocab", prompt: "Escucha y elige:", english: "We are planning to start a new business next year.", options: ["Planeamos iniciar un nuevo negocio el próximo año.", "Cerramos la tienda.", "Compramos un auto.", "No tenemos planes."], answer: 0, explanation: "'Planning to start' expresa un plan futuro." },
    { type: "build", prompt: "Ordena en pasado:", spanish: "Ayer compré huevos frescos en la granja.", words: ["Yesterday", "I", "bought", "fresh", "eggs", "at", "the", "farm."], explanation: "'Bought' es el pasado de 'buy'." },
    { type: "speak", prompt: "Pronuncia en voz alta:", english: "Could you tell me how much this costs?", explanation: "La 'l' en 'Could' es muda ('Kud')." }
  ],
  B1: [
    { type: "vocab", prompt: "Escucha el phrasal verb:", english: "You should never give up on your goals.", options: ["Nunca debes rendirte con tus metas.", "Cambia de trabajo hoy.", "Espera a que otros resuelvan.", "No empieces proyectos."], answer: 0, explanation: "'Give up on' = rendirse o abandonar." },
    { type: "build", prompt: "Construye el condicional:", spanish: "Si entrenas con constancia, verás grandes resultados.", words: ["If", "you", "train", "consistently,", "you", "will", "see", "great", "results."], explanation: "Primer condicional: If + presente, will + verbo." },
    { type: "speak", prompt: "Pronuncia con fluidez:", english: "I have been working on this project for three months.", explanation: "Presente perfecto continuo para acciones que continúan hoy." }
  ],
  B2: [
    { type: "vocab", prompt: "Select the accurate meaning:", english: "We need to weigh the pros and cons before signing.", options: ["Evaluate advantages and disadvantages carefully.", "Sign immediately.", "Cancel negotiations.", "Rewrite the contract."], answer: 0, explanation: "'Weigh the pros and cons' = assess benefits vs drawbacks." },
    { type: "build", prompt: "Arrange into a natural B2 sentence:", spanish: "Build: 'Had I known about the traffic, I would have taken another route.'", words: ["Had", "I", "known", "about", "the", "traffic,", "I", "would", "have", "taken", "another", "route."], explanation: "Inversion ('Had I known...') sounds sophisticated and natural." },
    { type: "speak", prompt: "Speak clearly:", english: "Despite initial setbacks, the team managed to pull it off.", explanation: "'Pull it off' means succeeding at something difficult." }
  ],
  C1: [
    { type: "vocab", prompt: "Identify the executive nuance:", english: "While lucrative on paper, bottlenecks could erode our margins.", options: ["Attractive in theory, but operational hurdles might reduce profits.", "Profits will double.", "Logistics are solved.", "Ignore margins."], answer: 0, explanation: "'On paper' contrasts theory with practical reality." },
    { type: "build", prompt: "Construct an advanced C1 sentence:", spanish: "Build: 'What sets top performers apart is their relentless consistency.'", words: ["What", "sets", "top", "performers", "apart", "is", "their", "relentless", "consistency."], explanation: "'Set apart' = distinguish from others." },
    { type: "speak", prompt: "Deliver with natural intonation:", english: "Let's touch base next week once you've mulled it over.", explanation: "'Touch base' (reconnect) and 'mull over' (think carefully)." }
  ],
  C2: [
    { type: "vocab", prompt: "Analyze the rhetorical subtlety:", english: "His praise was so faint it was practically damning.", options: ["His lukewarm compliment actually signaled disapproval.", "He endorsed it enthusiastically.", "Nobody understood.", "He praised without hesitation."], answer: 0, explanation: "'Damning with faint praise' = unenthusiastic praise implying criticism." },
    { type: "build", prompt: "Assemble this C2 mastery sentence:", spanish: "Build: 'Seldom do we encounter an opportunity that warrants such commitment.'", words: ["Seldom", "do", "we", "encounter", "an", "opportunity", "that", "warrants", "such", "commitment."], explanation: "Negative adverb inversion ('Seldom do we...')." },
    { type: "speak", prompt: "Mastery Challenge:", english: "Navigating volatility requires both foresight and unflappable composure.", explanation: "'Unflappable composure' = calmness under intense pressure." }
  ]
};

const DEFAULT_DATA = {
  profiles: [
    { id: 1, name: "Usuario 1", avatar: "svg-trader", level: null, completed: [], xp: 0, streak: 0, lastActive: null },
    { id: 2, name: "Usuario 2", avatar: "svg-elegant", level: null, completed: [], xp: 0, streak: 0, lastActive: null },
    { id: 3, name: "Usuario 3", avatar: "svg-slugger", level: null, completed: [], xp: 0, streak: 0, lastActive: null },
    { id: 4, name: "Usuario 4", avatar: "svg-shuffle", level: null, completed: [], xp: 0, streak: 0, lastActive: null }
  ]
};

let appData = structuredClone(DEFAULT_DATA);
let activeId = null, editId = null, editAvatar = "svg-trader";
let testStep = 0, testLvlIdx = 1, currentTestQ = null, testDone = false;
let usedQ = new Set(), testAnswers = [], testAnswered = false;
let lessonLvl = "A1", lessonStep = 0, builtWords = [], wordOrder = [];
let lessonAnswered = false, lessonFinished = false, saving = false;
let recognition = null, recognitionToken = 0, modalTrigger = null;
let profilesReady = false;
const $ = id => document.getElementById(id);
const TEST_LENGTH = Object.values(TEST_BANK).reduce((sum, questions) => sum + questions.length, 0);

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function currentUser() {
  return appData.profiles.find(profile => profile.id === activeId);
}

function setStatus(message, error = false) {
  $("app-status").textContent = message;
  $("app-status").className = `app-status${error ? " status-error" : ""}`;
}

async function api(path, options = {}) {
  const response = await fetch(`/api/profiles${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
    signal: AbortSignal.timeout(15000)
  });
  if (!response.ok) throw new Error("No se pudieron guardar los cambios.");
  return response.json();
}

async function saveProfile(id, changes) {
  const profile = await api(`/${id}`, { method: "PATCH", body: JSON.stringify(changes) });
  const index = appData.profiles.findIndex(item => item.id === id);
  appData.profiles[index] = profile;
  setStatus("");
  updateHeader();
  renderProfiles();
  renderLeaderboard();
  return profile;
}

async function loadProfiles() {
  setStatus("Cargando el progreso familiar…");
  $("retry-load").classList.add("hidden");
  try {
    // Import the old browser save once. Invalid or blocked storage never stops startup.
    let legacy = null;
    try {
      const stored = JSON.parse(localStorage.getItem("familyEnglishPro_v2"));
      if (Array.isArray(stored?.profiles)) legacy = stored.profiles;
    } catch { /* A clean database profile remains available. */ }
    appData = await api("", legacy ? { method: "POST", body: JSON.stringify({ profiles: legacy }) } : {});
    profilesReady = true;
    renderProfiles();
    renderLeaderboard();
    setStatus("");
  } catch {
    setStatus("No se pudo cargar el progreso. Reintenta para continuar con tus perfiles.", true);
    $("retry-load").classList.remove("hidden");
  }
}

function speak(text, rate = 0.95) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    setStatus("Este navegador no reproduce voz. Puedes leer la transcripción del ejercicio.", true);
    return;
  }
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    utterance.onerror = event => {
      if (!["canceled", "interrupted"].includes(event.error)) {
        setStatus("No se pudo reproducir el audio. Prueba de nuevo o lee la transcripción.", true);
      }
    };
    window.speechSynthesis.speak(utterance);
  } catch {
    setStatus("El audio no está disponible. Puedes leer la transcripción.", true);
  }
}

function stopAudio() {
  recognitionToken++;
  if (recognition) {
    recognition.abort();
    recognition = null;
  }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function showView(view) {
  stopAudio();
  ["profiles", "test", "dashboard", "lesson"].forEach(name => {
    $(`view-${name}`).classList.toggle("hidden", name !== view);
  });
  $("header-actions").classList.toggle("hidden", view === "profiles");
  updateHeader();
}

function updateHeader() {
  const user = currentUser();
  if (!user) return;
  $("hdr-streak").textContent = `🔥 ${user.streak}`;
  $("hdr-xp").textContent = `⭐ ${user.xp} XP`;
}

function renderProfiles() {
  $("profiles-grid").innerHTML = appData.profiles.map(profile => `
    <div class="profile-card">
      <button class="edit-btn" onclick="openEdit(${profile.id}, this)" ${profilesReady ? "" : "disabled"}
        aria-label="Editar ${escapeHTML(profile.name)}">✏️ Editar</button>
      <button class="profile-select" onclick="selectProfile(${profile.id})" ${profilesReady ? "" : "disabled"}>
        <span class="avatar" aria-hidden="true">${renderAvatar(profile.avatar)}</span>
        <span class="profile-name">${escapeHTML(profile.name)}</span>
        <span class="muted">${profile.level ? `Nivel ${profile.level}` : "Descubre tu nivel"}</span>
        <span class="profile-stats">⭐ ${profile.xp} XP · 🔥 ${profile.streak}</span>
      </button>
    </div>
  `).join("");
}

function renderLeaderboard() {
  const ranked = [...appData.profiles].sort((a, b) => b.xp - a.xp || b.completed.length - a.completed.length || a.id - b.id);
  $("leaderboard").innerHTML = ranked.map((profile, index) => `
    <div class="leaderboard-row">
      <span class="leaderboard-person"><span class="leaderboard-rank">${index + 1}.</span><span class="leaderboard-avatar" aria-hidden="true">${renderAvatar(profile.avatar)}</span><span class="leaderboard-name">${escapeHTML(profile.name)}</span></span>
      <span>${profile.level || "Sin nivel"} · <strong>${profile.xp} XP</strong></span>
    </div>
  `).join("");
}

function selectProfile(id) {
  if (!profilesReady) return;
  activeId = id;
  if (!currentUser()) return;
  if (currentUser().level) showDashboard();
  else startPlacementTest();
}

function goHome() {
  if (saving) return;
  activeId = null;
  closeEditModal();
  showView("profiles");
  renderProfiles();
  renderLeaderboard();
}

function openEdit(id, trigger) {
  if (!profilesReady || saving) return;
  const profile = appData.profiles.find(item => item.id === id);
  if (!profile) return;
  editId = id;
  editAvatar = profile.avatar;
  modalTrigger = trigger;
  $("edit-name-input").value = profile.name;
  $("edit-error").textContent = "";
  renderAvatarPicker();
  $("edit-modal").classList.remove("hidden");
  $("edit-name-input").focus();
}

function renderAvatarPicker() {
  $("avatar-picker").innerHTML = AVATARS.map((avatar, index) => {
    const illustration = Object.hasOwn(CUSTOM_AVATARS, avatar) && CUSTOM_AVATARS[avatar];
    const label = illustration ? illustration.label : `Avatar ${avatar}`;
    return `<button type="button" class="avatar-opt${illustration ? " avatar-opt-custom" : ""}${avatar === editAvatar ? " active" : ""}"
      aria-label="${escapeHTML(label)}" title="${escapeHTML(label)}" aria-pressed="${avatar === editAvatar}"
      onclick="chooseAvatar(${index})">${renderAvatar(avatar)}${illustration ? `<span class="avatar-caption" aria-hidden="true">${illustration.shortLabel}</span>` : ""}</button>`;
  }).join("");
}

function chooseAvatar(index) {
  if (saving || !AVATARS[index]) return;
  editAvatar = AVATARS[index];
  renderAvatarPicker();
  $("avatar-picker").children[index].focus();
}

function closeEditModal() {
  if (saving) return;
  $("edit-modal").classList.add("hidden");
  editId = null;
  // Saving redraws cards, so recover the replacement edit button when necessary.
  if (modalTrigger?.isConnected) modalTrigger.focus();
  else if (modalTrigger) $("profiles-grid").querySelector(".edit-btn")?.focus();
  modalTrigger = null;
}

async function saveProfileEdit() {
  if (editId === null || saving) return;
  const name = $("edit-name-input").value.trim();
  if (!name || name.length > 40) {
    $("edit-error").textContent = "Escribe un nombre de entre 1 y 40 caracteres.";
    $("edit-name-input").focus();
    return;
  }
  saving = true;
  $("edit-save").disabled = true;
  try {
    await saveProfile(editId, { name, avatar: editAvatar });
    saving = false;
    closeEditModal();
  } catch {
    $("edit-error").textContent = "No se pudo guardar el perfil. Reintenta.";
  } finally {
    saving = false;
    $("edit-save").disabled = false;
  }
}

function startPlacementTest() {
  if (!currentUser() || saving) return;
  testStep = 0;
  testLvlIdx = 1;
  testDone = false;
  testAnswers = [];
  usedQ = new Set();
  showView("test");
  renderTestQuestion();
}

function renderTestQuestion() {
  const availableLevels = LEVELS.map((_, index) => index).sort((a, b) => Math.abs(a - testLvlIdx) - Math.abs(b - testLvlIdx) || b - a);
  for (const index of availableLevels) {
    const questionIndex = TEST_BANK[LEVELS[index]].findIndex((_, n) => !usedQ.has(`${index}-${n}`));
    if (questionIndex === -1) continue;
    usedQ.add(`${index}-${questionIndex}`);
    currentTestQ = { ...TEST_BANK[LEVELS[index]][questionIndex], levelIndex: index };
    break;
  }
  testAnswered = false;
  $("test-counter").textContent = `Pregunta ${testStep + 1} de ${TEST_LENGTH}`;
  $("test-progress").style.width = `${testStep / TEST_LENGTH * 100}%`;
  $("test-level-hint").textContent = `Nivel: ${LEVELS[currentTestQ.levelIndex]}`;
  $("test-question").textContent = currentTestQ.q;
  $("test-audio-wrap").classList.toggle("hidden", !currentTestQ.audio);
  $("test-transcript").textContent = currentTestQ.audio || "";
  $("test-transcript-details").open = false;
  $("test-options").innerHTML = currentTestQ.opts.map((option, index) => `
    <button class="option-btn" onclick="answerTest(${index})">${escapeHTML(option)}</button>
  `).join("");
  $("test-feedback").className = "hidden";
  $("test-next-btn").disabled = true;
  $("test-next-btn").textContent = testStep === TEST_LENGTH - 1 ? "Ver mi nivel →" : "Siguiente →";
}

function speakCurrentTest(rate) {
  if (currentTestQ?.audio) speak(currentTestQ.audio, rate);
}

function answerTest(index) {
  if (testAnswered || testDone || !currentTestQ || !currentTestQ.opts[index]) return;
  testAnswered = true;
  const correct = index === currentTestQ.ans;
  testAnswers.push({ level: currentTestQ.levelIndex, correct });
  testLvlIdx = Math.max(0, Math.min(LEVELS.length - 1, currentTestQ.levelIndex + (correct ? 1 : -1)));
  $("test-options").querySelectorAll("button").forEach((button, n) => {
    button.disabled = true;
    button.classList.toggle("correct", n === currentTestQ.ans);
    button.classList.toggle("wrong", n === index && !correct);
  });
  $("test-feedback").className = `feedback-box feedback-${correct ? "ok" : "err"}`;
  $("test-feedback").textContent = `${correct ? "¡Correcto!" : "Sigue practicando."} ${currentTestQ.exp}`;
  $("test-next-btn").disabled = false;
}

async function nextTestQuestion() {
  if (!testAnswered || testDone || saving) return;
  stopAudio();
  if (testStep < TEST_LENGTH - 1) {
    testStep++;
    renderTestQuestion();
    return;
  }
  let assigned = "A1";
  LEVELS.forEach((level, index) => {
    const answers = testAnswers.filter(answer => answer.level === index);
    if (answers.length && answers.every(answer => answer.correct)) assigned = level;
  });
  saving = true;
  $("test-next-btn").disabled = true;
  try {
    await saveProfile(activeId, { level: assigned });
    testDone = true;
    $("test-progress").style.width = "100%";
    saving = false;
    showDashboard();
    setStatus(`Resultado orientativo: ${assigned}. ${testAnswers.filter(answer => answer.correct).length} de ${TEST_LENGTH} respuestas correctas. ¡Empieza a practicar!`);
  } catch {
    setStatus("No se pudo guardar tu nivel. Pulsa «Ver mi nivel» para reintentar.", true);
    $("test-next-btn").disabled = false;
  } finally {
    saving = false;
  }
}

function unlockedIndex(user) {
  return Math.min(LEVELS.length - 1, Math.max(LEVELS.indexOf(user.level), ...user.completed.map(level => LEVELS.indexOf(level) + 1)));
}

function showDashboard() {
  const user = currentUser();
  if (!user || saving) return;
  showView("dashboard");
  $("dash-welcome").innerHTML = `<span class="welcome-avatar" aria-hidden="true">${renderAvatar(user.avatar)}</span><span>Hola, ${escapeHTML(user.name)}</span>`;
  $("dash-subtitle").textContent = `${LEVEL_INFO[user.level].title} · ${user.completed.length} de ${LEVELS.length} niveles completados`;
  const unlocked = unlockedIndex(user);
  $("roadmap-list").innerHTML = LEVELS.map((level, index) => {
    const completed = user.completed.includes(level);
    const locked = index > unlocked;
    return `<div class="level-card${locked ? " locked" : ""}${completed ? " completed" : ""}${index === unlocked ? " current" : ""}">
      <span class="level-tag">${level}</span>
      <div class="level-description"><h3>${LEVEL_INFO[level].title}</h3><p class="muted">${LEVEL_INFO[level].desc}</p></div>
      <button class="btn btn-sm ${completed ? "btn-outline" : ""}" ${locked ? "disabled" : ""}
        onclick="startLesson('${level}')">${locked ? "Bloqueado" : completed ? "Repasar" : "Practicar"}</button>
    </div>`;
  }).join("");
}

function startLesson(level) {
  const user = currentUser();
  if (!user?.level || saving || !LEVELS.includes(level) || LEVELS.indexOf(level) > unlockedIndex(user)) return;
  lessonLvl = level;
  lessonStep = 0;
  lessonFinished = false;
  showView("lesson");
  $("lesson-mode-badge").textContent = LEVEL_INFO[level].immersion ? `${level} · English immersion` : `Nivel ${level}`;
  renderLesson();
}

function audioControls(text) {
  return `<div class="audio-bar">
    <button class="btn btn-outline btn-sm" onclick="speakLesson(0.95)">🔊 Escuchar</button>
    <button class="btn btn-outline btn-sm" onclick="speakLesson(0.65)">🐢 Lento</button>
  </div><details><summary>Ver transcripción / Show transcript</summary><p class="transcript">${escapeHTML(text)}</p></details>`;
}

function speakLesson(rate) {
  const lesson = LESSONS[lessonLvl][lessonStep];
  if (lesson?.english) speak(lesson.english, rate);
}

function renderLesson() {
  const lesson = LESSONS[lessonLvl][lessonStep];
  lessonAnswered = false;
  builtWords = [];
  $("lesson-progress").style.width = `${lessonStep / LESSONS[lessonLvl].length * 100}%`;
  let content = `<p class="muted">${lessonStep + 1} / ${LESSONS[lessonLvl].length}</p><h2 class="q-title">${escapeHTML(lesson.prompt)}</h2>`;
  if (lesson.type === "vocab") {
    content += audioControls(lesson.english);
    content += `<div id="lesson-options">${lesson.options.map((option, index) => `
      <button class="option-btn" onclick="answerLesson(${index})">${escapeHTML(option)}</button>
    `).join("")}</div>`;
  } else if (lesson.type === "build") {
    wordOrder = lesson.words.map((_, index) => index);
    for (let i = wordOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordOrder[i], wordOrder[j]] = [wordOrder[j], wordOrder[i]];
    }
    if (wordOrder.every((value, index) => value === index)) wordOrder.push(wordOrder.shift());
    content += `<p>${escapeHTML(lesson.spanish)}</p>
      <p class="muted exercise-hint">Pulsa las palabras para formar la oración. Pulsa una palabra elegida para devolverla.</p>
      <div class="word-bank" id="built-sentence" aria-label="Tu oración" aria-live="polite"></div>
      <div class="word-bank" id="word-bank" aria-label="Palabras disponibles"></div>
      <button class="btn btn-outline" id="check-sentence" onclick="checkSentence()" disabled>Comprobar / Check</button>`;
  } else {
    content += `<p class="speech-target">${escapeHTML(lesson.english)}</p>${audioControls(lesson.english)}
      <button class="btn" id="mic-btn" onclick="startPronunciation()">🎙️ Pronunciar / Speak</button>
      <p id="speech-status" class="transcript" role="status"></p>
      <button class="btn btn-outline btn-sm hidden" id="speech-fallback" onclick="completeSpeakingPractice()">Ya practiqué en voz alta / I practiced aloud</button>`;
  }
  content += `<div id="lesson-feedback" class="hidden" role="status" aria-live="polite"></div>
    <div class="right-actions"><button class="btn" id="lesson-next" onclick="nextLessonStep()" disabled>
      ${lessonStep === LESSONS[lessonLvl].length - 1 ? "Finalizar / Finish" : "Siguiente / Next →"}</button></div>`;
  $("lesson-container").innerHTML = content;
  if (lesson.type === "build") renderWords();
  if (lesson.type === "speak" && !(window.SpeechRecognition || window.webkitSpeechRecognition)) {
    showSpeechFallback("El reconocimiento de voz no está disponible en este navegador. Escucha el ejemplo y practica en voz alta. / Listen and practice aloud.");
    $("mic-btn").disabled = true;
  }
}

function lessonFeedback(correct, message) {
  $("lesson-feedback").className = `feedback-box feedback-${correct ? "ok" : "err"}`;
  $("lesson-feedback").textContent = message;
  if (correct) {
    lessonAnswered = true;
    $("lesson-next").disabled = false;
  }
}

function answerLesson(index) {
  const lesson = LESSONS[lessonLvl][lessonStep];
  if (lessonAnswered || lesson.type !== "vocab" || !lesson.options[index]) return;
  const buttons = $("lesson-options").querySelectorAll("button");
  const correct = index === lesson.answer;
  buttons[index].classList.add(correct ? "correct" : "wrong");
  buttons[index].disabled = true;
  if (correct) buttons.forEach(button => { button.disabled = true; });
  lessonFeedback(correct, `${correct ? "¡Correcto! / Correct!" : "Inténtalo de nuevo. / Try again."} ${lesson.explanation}`);
}

function renderWords() {
  const lesson = LESSONS[lessonLvl][lessonStep];
  $("built-sentence").innerHTML = builtWords.map((index, position) => `
    <button class="word-chip" onclick="removeWord(${position})" ${lessonAnswered ? "disabled" : ""}>${escapeHTML(lesson.words[index])}</button>
  `).join("");
  $("word-bank").innerHTML = wordOrder.map(index => `
    <button class="word-chip" onclick="addWord(${index})" ${lessonAnswered || builtWords.includes(index) ? "disabled" : ""}>${escapeHTML(lesson.words[index])}</button>
  `).join("");
  $("check-sentence").disabled = lessonAnswered || builtWords.length !== lesson.words.length;
}

function addWord(index) {
  const lesson = LESSONS[lessonLvl][lessonStep];
  if (lessonAnswered || lesson.type !== "build" || !lesson.words[index] || builtWords.includes(index)) return;
  builtWords.push(index);
  renderWords();
}

function removeWord(position) {
  if (lessonAnswered || position < 0 || position >= builtWords.length) return;
  builtWords.splice(position, 1);
  renderWords();
}

function checkSentence() {
  const lesson = LESSONS[lessonLvl][lessonStep];
  if (lessonAnswered || lesson.type !== "build" || builtWords.length !== lesson.words.length) return;
  const correct = builtWords.map(index => lesson.words[index]).join(" ") === lesson.words.join(" ");
  lessonFeedback(correct, correct ? `¡Correcto! / Correct! ${lesson.explanation}` : "Cambia el orden e inténtalo de nuevo. / Reorder the words and try again.");
  renderWords();
}

function normalizeSpeech(text) {
  return text.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9'\s]/g, "").replace(/\s+/g, " ").trim();
}

function speechAccuracy(expected, transcript) {
  const target = normalizeSpeech(expected).split(" ");
  const heard = normalizeSpeech(transcript).split(" ");
  const distances = Array.from({ length: target.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= heard.length; j++) distances[0][j] = j;
  for (let i = 1; i <= target.length; i++) {
    for (let j = 1; j <= heard.length; j++) {
      distances[i][j] = Math.min(distances[i - 1][j] + 1, distances[i][j - 1] + 1,
        distances[i - 1][j - 1] + (target[i - 1] === heard[j - 1] ? 0 : 1));
    }
  }
  return Math.max(0, 1 - distances[target.length][heard.length] / Math.max(target.length, heard.length));
}

function showSpeechFallback(message) {
  $("speech-status").textContent = message;
  $("speech-fallback").classList.remove("hidden");
}

function startPronunciation() {
  const lesson = LESSONS[lessonLvl][lessonStep];
  if (lesson.type !== "speak" || lessonAnswered || recognition) return;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showSpeechFallback("Practica en voz alta para continuar. / Practice aloud to continue.");
    return;
  }
  stopAudio();
  const token = recognitionToken;
  try {
    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    const session = recognition;
    let gotResult = false;
    $("mic-btn").disabled = true;
    $("speech-status").textContent = "Escuchando… / Listening…";
    session.onresult = event => {
      if (token !== recognitionToken) return;
      gotResult = true;
      const transcript = event.results[0][0].transcript;
      const accuracy = speechAccuracy(lesson.english, transcript);
      $("speech-status").textContent = `Escuché / I heard: «${transcript}» · Coincidencia / Match: ${Math.round(accuracy * 100)}%`;
      lessonFeedback(accuracy >= 0.75, accuracy >= 0.75 ? `¡Buen trabajo! / Well done! ${lesson.explanation}` : "Escucha el ejemplo y vuelve a intentarlo. / Listen and try again.");
    };
    session.onerror = event => {
      if (token !== recognitionToken) return;
      gotResult = true;
      const message = ["not-allowed", "service-not-allowed"].includes(event.error)
        ? "Permite el micrófono en tu navegador o practica en voz alta sin grabar. / Allow microphone access or practice aloud."
        : "No se pudo reconocer la voz. Reintenta o practica en voz alta. / Try again or practice aloud.";
      showSpeechFallback(message);
    };
    session.onend = () => {
      if (token !== recognitionToken) return;
      recognition = null;
      $("mic-btn").disabled = lessonAnswered;
      if (!gotResult) showSpeechFallback("No se detectó voz. Reintenta o practica en voz alta. / No speech detected; try again or practice aloud.");
    };
    session.start();
  } catch {
    recognition = null;
    $("mic-btn").disabled = false;
    showSpeechFallback("El micrófono no está disponible. Practica en voz alta para continuar. / Practice aloud to continue.");
  }
}

function completeSpeakingPractice() {
  if (LESSONS[lessonLvl][lessonStep].type !== "speak" || lessonAnswered) return;
  stopAudio();
  $("mic-btn").disabled = true;
  $("speech-fallback").disabled = true;
  lessonFeedback(true, "Práctica completada sin evaluación de voz. / Practice completed without speech assessment.");
}

async function nextLessonStep() {
  if (!lessonAnswered || lessonFinished || saving) return;
  stopAudio();
  if (lessonStep < LESSONS[lessonLvl].length - 1) {
    lessonStep++;
    renderLesson();
    return;
  }
  saving = true;
  $("lesson-next").disabled = true;
  try {
    const alreadyCompleted = currentUser().completed.includes(lessonLvl);
    await saveProfile(activeId, { completeLevel: lessonLvl });
    lessonFinished = true;
    $("lesson-progress").style.width = "100%";
    $("lesson-container").innerHTML = `<h2>¡Nivel ${lessonLvl} completado! / Level complete!</h2>
      <p class="transcript">${alreadyCompleted ? "¡Buen repaso! Tu progreso sigue guardado. / Good review!" : "+100 XP · ¡Tu progreso está guardado! / Your progress is saved!"}</p>
      <div class="right-actions"><button class="btn" onclick="showDashboard()">Volver al mapa / Back to roadmap →</button></div>`;
  } catch {
    setStatus("No se pudo guardar la lección. Pulsa «Finalizar» para reintentar.", true);
    $("lesson-next").disabled = false;
  } finally {
    saving = false;
  }
}

function initialize() {
  renderProfiles();
  renderLeaderboard();
  $("edit-modal").addEventListener("click", event => {
    if (event.target === $("edit-modal")) closeEditModal();
  });
  $("edit-modal").addEventListener("keydown", event => {
    if (event.key === "Escape") closeEditModal();
    if (event.key === "Enter" && event.target === $("edit-name-input")) {
      event.preventDefault();
      saveProfileEdit();
    }
    if (event.key === "Tab") {
      const focusable = [...$("edit-modal").querySelectorAll("button:not(:disabled), input")];
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && event.target === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && event.target === last) { event.preventDefault(); first.focus(); }
    }
  });
  loadProfiles();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
else initialize();
/* === EXTENSIÓN PRO: DIAGNÓSTICO REAL (PRE-A1 -> C2) + EXAMEN OBLIGATORIO 100% === */
(function () {
  const PRO_LEVELS = ["Pre-A1", "A1", "A2", "B1", "B2", "C1", "C2"];
  const PRO_INFO = {
    "Pre-A1": { title: "Desde Cero (Pre-A1)", desc: "Sonidos básicos, saludos, números y primeras frases.", immersion: false },
    "A1": { title: "Principiante (A1)", desc: "Presente simple, familia, comida y supervivencia diaria.", immersion: false },
    "A2": { title: "Elemental (A2)", desc: "Pasado simple, rutinas, planes futuros y compras.", immersion: false },
    "B1": { title: "Intermedio (B1)", desc: "Experiencias, opiniones, phrasal verbs y condicionales.", immersion: false },
    "B2": { title: "Upper-Intermediate (B2)", desc: "100% English Immersion: Natural phrasing & complex arguments.", immersion: true },
    "C1": { title: "Advanced (C1)", desc: "100% English Immersion: Nuance, executive idioms & precision.", immersion: true },
    "C2": { title: "Mastery / Near-Native (C2)", desc: "100% English Immersion: Rhetoric, irony & native mastery.", immersion: true }
  };

  const DIAG_POOL = {
    grammar: {
      A1: [
        { type: "mcq", q: "[Gramática] Completa: 'My brother ___ twenty years old.'", opts: ["am", "is", "are", "have"], ans: 1, exp: "En inglés la edad usa el verbo 'to be' ('is')." },
        { type: "mcq", q: "[Gramática] Pregunta correcta en presente:", opts: ["Where you live?", "Where do you live?", "Where does you live?", "Where are you live?"], ans: 1, exp: "Con 'you' usamos el auxiliar 'do'." }
      ],
      A2: [
        { type: "mcq", q: "[Gramática] Pasado simple: 'Yesterday we ___ a great movie.'", opts: ["see", "saw", "seen", "seeing"], ans: 1, exp: "'Saw' es el pasado irregular de 'see'." },
        { type: "mcq", q: "[Gramática] Comparativo: 'Night driving is ___ than day driving.'", opts: ["dangerous", "more dangerous", "dangerouser", "most dangerous"], ans: 1, exp: "Adjetivos largos usan 'more' en comparativo." }
      ],
      B1: [
        { type: "mcq", q: "[Grammar] Second Conditional: 'If I ___ fluent, I would apply today.'", opts: ["am", "was", "were", "will be"], ans: 2, exp: "En situaciones hipotéticas formales se usa 'If I were...'." },
        { type: "mcq", q: "[Grammar] Present Perfect: 'I ___ here since 2018.'", opts: ["live", "am living", "have lived", "lived"], ans: 2, exp: "Acciones que empezaron en el pasado y siguen hoy usan Present Perfect." }
      ],
      B2: [
        { type: "mcq", q: "[Grammar] Past Perfect: 'By the time he called, we ___ the order.'", opts: ["already shipped", "had already shipped", "have shipped", "ship"], ans: 1, exp: "Past Perfect indica una acción anterior a otro evento pasado." },
        { type: "mcq", q: "[Grammar] Regret: 'I wish I ___ more attention during the meeting.'", opts: ["paid", "had paid", "would pay", "pay"], ans: 1, exp: "'Wish + Past Perfect' expresa arrepentimiento sobre el pasado." }
      ],
      C1: [
        { type: "mcq", q: "[Grammar] Inversion: 'Not only ___ the goal, but they also set a record.'", opts: ["they met", "did they meet", "they did meet", "met they"], ans: 1, exp: "Tras 'Not only' al inicio se invierte auxiliar + sujeto." },
        { type: "mcq", q: "[Grammar] Subjunctive: 'The board insisted that the CFO ___ present.'", opts: ["is", "be", "was", "were"], ans: 1, exp: "El subjuntivo mandativo usa la forma base ('be')." }
      ],
      C2: [
        { type: "mcq", q: "[Grammar] Correlation: '___ had the market calmed than another shock hit.'", opts: ["Hardly", "No sooner", "Scarcely", "Barely"], ans: 1, exp: "'No sooner' correlaciona estrictamente con 'than'." },
        { type: "mcq", q: "[Grammar] Concessive: 'Much ___ I admire his drive, I disagree.'", opts: ["although", "as", "despite", "however"], ans: 1, exp: "'Much as + sujeto + verbo' es una cláusula concesiva culta." }
      ]
    },
    listening: {
      A1: [
        { type: "mcq", q: "[Oído] Escucha y traduce:", audio: "Can I have a glass of water, please?", opts: ["¿Me puede dar un vaso de agua?", "¿Dónde está el baño?", "¿Cuánto cuesta?", "¿A qué hora abren?"], ans: 0, exp: "'Can I have a glass of water?' = ¿Me puede dar un vaso de agua?" },
        { type: "dict", q: "[Dictado Real] Escucha y escribe exactamente en inglés:", audio: "I go to work every morning", ans: "i go to work every morning", exp: "Frase exacta: 'I go to work every morning'." }
      ],
      A2: [
        { type: "mcq", q: "[Oído] Escucha y elige la respuesta lógica:", audio: "What time does your flight take off tomorrow?", opts: ["At six thirty in the morning.", "Yes, I like flying.", "To New York.", "By taxi."], ans: 0, exp: "'What time does your flight take off?' pregunta la hora de despegue." },
        { type: "dict", q: "[Dictado Real] Escribe exactamente lo que escuchas:", audio: "She bought three tickets yesterday", ans: "she bought three tickets yesterday", exp: "Frase exacta: 'She bought three tickets yesterday'." }
      ],
      B1: [
        { type: "mcq", q: "[Listening] Identify the issue:", audio: "I've been trying to reach support, but the line keeps dropping.", opts: ["The call keeps disconnecting.", "They forgot their password.", "They want to cancel service.", "They are on a plane."], ans: 0, exp: "'The line keeps dropping' = la llamada se cae continuamente." },
        { type: "dict", q: "[Dictation] Type exactly what you hear:", audio: "We need to improve our daily habits", ans: "we need to improve our daily habits", exp: "Exact: 'We need to improve our daily habits'." }
      ],
      B2: [
        { type: "mcq", q: "[Listening] Grasp the nuance:", audio: "Had I known traffic would be gridlocked, I would have left earlier.", opts: ["The speaker regrets not leaving earlier due to heavy traffic.", "There is no traffic today.", "The speaker arrived early.", "The speaker took a train."], ans: 0, exp: "'Gridlocked' = tráfico totalmente paralizado." },
        { type: "dict", q: "[Dictation] Type the exact sentence:", audio: "Consistency beats intensity in the long run", ans: "consistency beats intensity in the long run", exp: "Exact: 'Consistency beats intensity in the long run'." }
      ],
      C1: [
        { type: "mcq", q: "[Listening] Executive takeaway:", audio: "While short-term numbers look strong, we shouldn't lose sight of supply risks.", opts: ["Profits are good, but logistical risks remain serious.", "Supply issues are solved.", "Short-term numbers are bad.", "Ignore logistics."], ans: 0, exp: "'Lose sight of' = descuidar o perder de vista un riesgo." },
        { type: "dict", q: "[Dictation] Transcribe accurately:", audio: "Their strategic pivot yielded unprecedented growth", ans: "their strategic pivot yielded unprecedented growth", exp: "Exact: 'Their strategic pivot yielded unprecedented growth'." }
      ],
      C2: [
        { type: "mcq", q: "[Listening] Subtle tone:", audio: "To say his talk was underwhelming would be the understatement of the year.", opts: ["His talk was extremely disappointing.", "His talk was brilliant.", "Everyone loved it.", "He didn't speak."], ans: 0, exp: "'Understatement of the year' enfatiza que fue mucho peor de lo dicho." },
        { type: "dict", q: "[Dictation] Transcribe with precision:", audio: "Complacency is the silent enemy of sustained excellence", ans: "complacency is the silent enemy of sustained excellence", exp: "Exact: 'Complacency is the silent enemy of sustained excellence'." }
      ]
    },
    reading: {
      A1: [
        { type: "mcq", q: "[Lectura] 'CLOSED ON SUNDAYS. OPEN MON-SAT.' ¿Qué día cierra?", opts: ["Lunes", "Sábado", "Domingo", "Nunca"], ans: 2, exp: "'Closed on Sundays' = Cerrado los domingos." },
        { type: "mcq", q: "[Vocabulario] ¿Cuál NO es una fruta?", opts: ["Apple", "Banana", "Table", "Orange"], ans: 2, exp: "'Table' significa mesa." }
      ],
      A2: [
        { type: "mcq", q: "[Lectura] 'I'm running 15 minutes late. Please start without me.' ¿Qué pide?", opts: ["Cancelar todo", "Que empiecen sin esa persona", "Que la recojan", "Moverlo a mañana"], ans: 1, exp: "'Start without me' = Empiecen sin mí." },
        { type: "mcq", q: "[Vocabulario] Opuesto de 'Expensive' (caro):", opts: ["Heavy", "Cheap", "Fast", "Clean"], ans: 1, exp: "'Cheap' = barato." }
      ],
      B1: [
        { type: "mcq", q: "[Reading] 'Solid-state cells charge faster and carry lower fire risk.' Advantage?", opts: ["Cheaper to make.", "Faster charging and safer.", "Lighter weight.", "Lasts one hour."], ans: 1, exp: "'Charge faster and carry lower fire risk' = carga rápida y más segura." },
        { type: "mcq", q: "[Vocabulary] Synonym for 'Postpone':", opts: ["Put off", "Take off", "Give up", "Look after"], ans: 0, exp: "'Put off' = posponer." }
      ],
      B2: [
        { type: "mcq", q: "[Reading] 'Remote work boosted autonomy, yet spontaneous teamwork suffered.' Main point?", opts: ["More flexibility, but harder informal collaboration.", "Offices are dead.", "Nobody likes autonomy.", "Zero productivity."], ans: 0, exp: "Contrasta mayor autonomía con menor colaboración espontánea." },
        { type: "mcq", q: "[Vocabulary] 'The software will ___ our workflow.'", opts: ["streamline", "hinder", "undermine", "prolong"], ans: 0, exp: "'Streamline' = hacer un proceso más ágil y eficiente." }
      ],
      C1: [
        { type: "mcq", q: "[Reading] 'The findings rest on a sample too narrow to warrant sweeping policy changes.' Critique?", opts: ["Data is fake.", "Sample is too small for major policy shifts.", "Change policies now.", "Too many participants."], ans: 1, exp: "'Too narrow to warrant' = muestra muy pequeña para justificar cambios." },
        { type: "mcq", q: "[Vocabulary] Word meaning 'found everywhere':", opts: ["Ubiquitous", "Ephemeral", "Obsolete", "Ambiguous"], ans: 0, exp: "'Ubiquitous' = omnipresente." }
      ],
      C2: [
Usa el código con precaución.
{ type: "mcq", q: "[Reading] 'Far from vindicating the policy, the figures underscored its fragility.' Meaning?", opts: ["Proved it worked.", "Exposed its deep weakness.", "Figures were irrelevant.", "Rapid recovery."], ans: 1, exp: "'Underscored its fragility' = dejó en evidencia su debilidad." },
{ type: "mcq", q: "[Vocabulary] Word for 'universal cure-all':", opts: ["Panacea", "Paradox", "Enigma", "Catalyst"], ans: 0, exp: "'Panacea' = remedio universal." }
]
}
};
const PRO_CURRICULUM = {
"Pre-A1": {
lessons: [
{ type: "vocab", prompt: "Saludos desde cero: Escucha y traduce:", english: "Hello, nice to meet you.", options: ["Hola, mucho gusto en conocerte.", "Adiós, hasta luego.", "¿Dónde vives?", "Tengo sueño."], ans: 0, exp: "'Nice to meet you' = Mucho gusto en conocerte." },
{ type: "vocab", prompt: "Números y familia: Escucha:", english: "I have two brothers and one sister.", options: ["Tengo dos hermanos y una hermana.", "Vivo en una casa azul.", "Trabajo cinco días.", "Tengo treinta años."], ans: 0, exp: "'Two' = dos, 'one' = uno/una." },
{ type: "speak", prompt: "Pronunciación desde cero: Repite despacio:", english: "Good morning, how are you today?", exp: "Pronuncia: 'Gud mor-ning, jau ar iu tu-dei?'" }
],
exam: [
{ q: "¿Cómo se dice 'Mucho gusto en conocerte'?", opts: ["See you later", "Nice to meet you", "Good night", "How old are you"], ans: 1, exp: "'Nice to meet you' = Mucho gusto." },
{ q: "Completa: 'I ___ from Dominican Republic.'", opts: ["is", "are", "am", "be"], ans: 2, exp: "Con 'I' siempre usamos 'am'." },
{ q: "Escucha y elige el significado:", audio: "Thank you very much for your help", opts: ["De nada", "Muchas gracias por tu ayuda", "Por favor", "¿Qué hora es?"], ans: 1, exp: "'Thank you very much' = Muchas gracias." },
{ q: "¿Qué número es 'Seven'?", opts: ["5", "6", "7", "8"], ans: 2, exp: "Seven = 7." },
{ q: "Saludo correcto en la mañana:", opts: ["Good night", "Good morning", "Goodbye", "See you"], ans: 1, exp: "'Good morning' = Buenos días." }
]
},
"A1": {
lessons: [
{ type: "vocab", prompt: "Rutina diaria: Escucha:", english: "I wake up at five in the morning.", options: ["Me despierto a las cinco de la mañana.", "Duermo hasta tarde.", "Voy al cine.", "Como pan."], ans: 0, exp: "'Wake up' = despertarse." },
{ type: "speak", prompt: "Pronuncia en voz alta:", english: "I am learning English with my family.", exp: "Pronuncia cada sílaba con claridad." }
],
exam: [
{ q: "Completa: 'She ___ coffee every morning.'", opts: ["drink", "drinks", "drinking", "to drink"], ans: 1, exp: "Con 'She' agregamos '-s' al verbo ('drinks')." },
{ q: "Negativo correcto: 'We ___ eat fast food.'", opts: ["doesn't", "not", "don't", "aren't"], ans: 2, exp: "Con 'We' usamos 'don't'." },
{ q: "Escucha y traduce:", audio: "How much does this shirt cost?", opts: ["¿Dónde la compraste?", "¿Cuánto cuesta esta camisa?", "¿De qué color es?", "¿Tienes otra talla?"], ans: 1, exp: "'How much does ... cost?' pregunta precio." },
{ q: "Plural irregular de 'Child':", opts: ["Childs", "Childrens", "Children", "Childes"], ans: 2, exp: "'Children' es el plural correcto." },
{ q: "Completa: 'There ___ four people here.'", opts: ["is", "am", "are", "be"], ans: 2, exp: "Para plural usamos 'There are'." }
]
},
"A2": {
lessons: [
{ type: "vocab", prompt: "Planes futuros: Escucha:", english: "We are going to start a new business next year.", options: ["Vamos a iniciar un nuevo negocio el próximo año.", "Cerramos la tienda.", "Compramos un auto.", "No tenemos planes."], ans: 0, exp: "'Going to' indica planes futuros." },
{ type: "speak", prompt: "Pronuncia con claridad:", english: "Could you tell me where the bank is?", exp: "La 'l' en 'Could' es muda ('Kud')." }
],
exam: [
{ q: "Pasado simple: 'Last week they ___ to Santiago.'", opts: ["drive", "drove", "driven", "driving"], ans: 1, exp: "'Drove' es el pasado de 'drive'." },
{ q: "Comparativo: 'Today is ___ than yesterday.'", opts: ["hot", "more hot", "hotter", "hottest"], ans: 2, exp: "Adjetivos cortos duplican consonante ('hotter')." },
{ q: "Escucha y responde:", audio: "How long does it take to get there?", opts: ["About twenty minutes.", "Yes, I went.", "Tomorrow.", "Very big."], ans: 0, exp: "'How long does it take?' pregunta duración." },
{ q: "Completa: 'I haven't finished .'", opts: ["already", "yet", "just", "since"], ans: 1, exp: "'Yet' va al final de negativas." },
{ q: "Obligación: 'You ___ wear a seatbelt.'", opts: ["must", "can't", "mustn't", "might not"], ans: 0, exp: "'Must' expresa obligación." }
]
},
"B1": {
lessons: [
{ type: "vocab", prompt: "Phrasal verbs: Escucha:", english: "Never give up on your long-term goals.", options: ["Nunca te rindas con tus metas a largo plazo.", "Cambia de trabajo.", "Espera a otros.", "Abandona proyectos."], ans: 0, exp: "'Give up on' = rendirse." },
{ type: "speak", prompt: "Fluidez oral:", english: "I have been working on this app for several days.", exp: "Conecta 'have been' naturalmente." }
],
exam: [
{ q: "Segundo condicional: 'If I ___ you, I would accept.'", opts: ["am", "was", "were", "will be"], ans: 2, exp: "Se usa 'If I were you...'." },
{ q: "¿Qué significa 'call off'?", opts: ["Llamar", "Cancelar", "Posponer", "Aprobar"], ans: 1, exp: "'Call off' = cancelar." },
{ q: "Completa: 'She is used to ___ early.'", opts: ["wake up", "waking up", "woke up", "waken up"], ans: 1, exp: "'Be used to' lleva '-ing'." },
{ q: "Escucha y elige:", audio: "I'm looking forward to meeting you next week.", opts: ["Tengo muchas ganas de conocerte la próxima semana.", "No podré verte.", "Olvidé la cita.", "Te vi ayer."], ans: 0, exp: "'Look forward to + ing' = esperar con entusiasmo." },
{ q: "Voz pasiva: 'This house ___ built in 1995.'", opts: ["is", "was", "were", "has"], ans: 1, exp: "Pasado pasivo singular: 'was built'." }
]
},
"B2": {
lessons: [
{ type: "vocab", prompt: "Listen and choose the meaning:", english: "We must weigh the pros and cons before signing.", options: ["Evaluate advantages and disadvantages carefully.", "Sign immediately.", "Cancel everything.", "Hire staff."], ans: 0, exp: "'Weigh the pros and cons' = assess benefits vs drawbacks." },
{ type: "speak", prompt: "Speak with natural rhythm:", english: "Despite initial setbacks, the team managed to pull it off.", exp: "'Pull it off' = succeed at something difficult." }
],
exam: [
{ q: "'By the time the flight landed, we ___ for six hours.'", opts: ["waited", "had been waiting", "have waited", "are waiting"], ans: 1, exp: "Past Perfect Continuous shows duration before a past event." },
{ q: "'I'd rather you ___ anyone about this yet.'", opts: ["don't tell", "didn't tell", "not tell", "haven't told"], ans: 1, exp: "'Would rather + subject + past simple'." },
{ q: "Collocation: 'The policy will ___ a major impact.'", opts: ["do", "make", "have", "put"], ans: 2, exp: "'To have an impact'." },
{ q: "Listen and identify intent:", audio: "It's high time we addressed the root cause of the issue.", opts: ["We should have fixed the core problem already.", "We have plenty of time.", "Minor issue.", "Someone else will fix it."], ans: 0, exp: "'It's high time + past simple' = overdue action." },
{ q: "What does 'cut corners' mean?", opts: ["Drive faster", "Do something poorly to save time or money", "Take a shortcut", "Increase budget"], ans: 1, exp: "'Cut corners' = sacrifice quality to save effort/money." }
]
},
"C1": {
lessons: [
{ type: "vocab", prompt: "Executive takeaway:", english: "While lucrative on paper, bottlenecks could erode our margins.", options: ["Attractive in theory, but operational hurdles might reduce profit.", "Profits guaranteed.", "Logistics solved.", "Ignore margins."], ans: 0, exp: "'On paper' contrasts theory with practical reality." },
{ type: "speak", prompt: "Deliver with executive poise:", english: "Let's touch base next week once you've mulled it over.", exp: "'Mull it over' = think deeply before deciding." }
],
exam: [
{ q: "' had the announcement been made than shares plummeted.'", opts: ["Hardly", "No sooner", "Scarcely", "Barely"], ans: 1, exp: "'No sooner ... than' is the exact correlative pair." },
{ q: "What does 'bite the bullet' mean?", opts: ["Reject a deal", "Face a difficult situation courageously", "Act impulsively", "Quit"], ans: 1, exp: "'Bite the bullet' = endure an unavoidable hardship." },
{ q: "'The CEO demanded that the report ___ submitted by noon.'", opts: ["is", "be", "was", "were"], ans: 1, exp: "Mandative subjunctive uses base verb 'be'." },
{ q: "Word meaning 'clear and easy to understand':", opts: ["Lucid", "Tenuous", "Cursory", "Obtuse"], ans: 0, exp: "'Lucid' = crystal clear." },
{ q: "Listen and infer:", audio: "His remarks were a thinly veiled criticism of management.", opts: ["He criticized management almost openly.", "He praised management.", "Different company.", "Nobody understood."], ans: 0, exp: "'Thinly veiled' = barely disguised." }
]
},
"C2": {
lessons: [
{ type: "vocab", prompt: "Rhetorical subtlety:", english: "His praise was so faint it was practically damning.", options: ["His lukewarm compliment actually signaled disapproval.", "Praised enthusiastically.", "Speechless.", "Everyone agreed."], ans: 0, exp: "'Damning with faint praise' implies criticism." },
{ type: "speak", prompt: "Mastery Pronunciation:", english: "Navigating volatility requires both foresight and unflappable composure.", exp: "'Unflappable composure' = calmness under intense pressure." }
],
exam: [
{ q: "'He claims to be an expert, ___ his analysis misses the core issue.'", opts: ["albeit", "notwithstanding", "yet", "moreover"], ans: 2, exp: "'Yet' introduces a sharp, concise contrast." },
{ q: "Meaning of 'to equivocate':", opts: ["Speak bluntly", "Use ambiguous language to avoid commitment", "Apologize deeply", "Compare fairly"], ans: 1, exp: "'Equivocate' = deliberate ambiguity." },
{ q: "'A ___ victory; legal fees far exceeded the settlement.'", opts: ["pyrrhic", "resounding", "unanimous", "sweeping"], ans: 0, exp: "A 'pyrrhic victory' costs so much it amounts to defeat." },
{ q: "What is a 'panacea'?", opts: ["Widespread disease", "Universal cure-all solution", "Logical paradox", "Minor setback"], ans: 1, exp: "'Panacea' = remedy for all ills." },
{ q: "Listen and grasp irony:", audio: "Oh brilliant, another software update right before our live presentation.", opts: ["Frustrated by terrible timing.", "Thrilled about update.", "Presentation canceled.", "Update finished."], ans: 0, exp: "Sarcastic 'Oh brilliant' signals annoyance." }
]
}
};
function proSpeak(txt, rate = 0.95) {
if (!("speechSynthesis" in window)) return;
window.speechSynthesis.cancel();
const u = new SpeechSynthesisUtterance(txt);
u.lang = "en-US"; u.rate = rate;
window.speechSynthesis.speak(u);
}
function getStoredState() {
try {
for (let i = 0; i < localStorage.length; i++) {
const k = localStorage.key(i);
const val = JSON.parse(localStorage.getItem(k));
if (val && Array.isArray(val.profiles) && val.profiles.length === 4) return { key: k, data: val };
}
} catch (e) {}
return null;
}
let proActiveProfile = null;
let diagStep = 0, diagLvlIdx = 1, diagAnswered = false;
let diagStats = { grammar: { ok: 0 }, listening: { ok: 0 }, reading: { ok: 0 } };
let diagSkillsOrder = [];
// Reemplaza la selección de perfil para abrir el Filtro Cero vs Examen Diagnóstico Real
const origSelect = window.selectProfile;
window.selectProfile = function (id) {
const store = getStoredState();
const prof = store ? store.data.profiles.find(p => p.id === id) : null;
if (prof && !prof.level) {
proActiveProfile = prof;
openProIntro(prof);
} else if (prof) {
proActiveProfile = prof;
if (typeof origSelect === "function") origSelect(id);
setTimeout(() => enhanceDashboardWith100Rule(prof), 60);
} else if (typeof origSelect === "function") {
origSelect(id);
}
};
function openProIntro(prof) {
["view-profiles", "view-dashboard", "view-lesson"].forEach(v => { if ($(v)) $(v).classList.add("hidden"); });
const tv = $("view-test");
tv.classList.remove("hidden");
tv.innerHTML = <div class="card" style="text-align:center; padding:26px 18px;"> <span class="badge">Evaluación Diagnóstica Real (Pre-A1 → C2)</span> <h2 style="margin:14px 0 8px;">¡Bienvenido, ${prof.name}!</h2> <p class="muted" style="margin-bottom:20px;">Para ubicarte en tu nivel real y evitar frustraciones, elige tu punto de partida:</p> <div style="display:grid; gap:12px; max-width:440px; margin:0 auto;"> <button class="btn" id="btn-start-diag">🎯 Hacer Examen Diagnóstico Real (15 preguntas · Gramática, Oído con Dictado y Lectura)</button> <button class="btn btn-outline" id="btn-start-zero">🌱 Empiezo desde CERO absoluto (Ubicarme en Pre-A1 sin examen)</button> </div> </div>;
$("btn-start-zero").onclick = () => {
const store = getStoredState();
const p = store.data.profiles.find(x => x.id === prof.id);
p.level = "Pre-A1";
p.completedLevels = [];
p.proReport = { grammar: 0, listening: 0, reading: 0, weakest: "Fundamentos desde cero (Pre-A1)" };
localStorage.setItem(store.key, JSON.stringify(store.data));
window.selectProfile(p.id);
};
$("btn-start-diag").onclick = () => startProDiagnostic(prof);
}
function startProDiagnostic(prof) {
diagStep = 0; diagLvlIdx = 1;
diagStats = { grammar: { ok: 0 }, listening: { ok: 0 }, reading: { ok: 0 } };
diagSkillsOrder = [
"grammar","grammar","grammar","grammar","grammar",
"listening","listening","listening","listening","listening",
"reading","reading","reading","reading","reading"
];
renderDiagStep(prof);
}
function renderDiagStep(prof) {
diagAnswered = false;
const evalLvls = ["A1", "A2", "B1", "B2", "C1", "C2"];
const curLvl = evalLvls[diagLvlIdx];
const skill = diagSkillsOrder[diagStep];
const pool = DIAG_POOL[skill][curLvl];
const q = pool[diagStep % pool.length];
const skillLabel = { grammar: "Gramática", listening: "Oído y Dictado Real", reading: "Lectura y Vocabulario" }[skill];
const tv = $("view-test");
tv.innerHTML = <div class="row-between" style="display:flex; justify-content:space-between; margin-bottom:10px;"> <span class="badge">Diagnóstico · ${skillLabel}</span> <span class="muted">Pregunta ${diagStep + 1} de 15</span> </div> <div class="card"> <span class="badge">Nivel evaluado: ${curLvl}</span> <h3 style="margin:14px 0;">${q.q}</h3> ${q.audio ?
🔊 Escuchar
🐢 Lento
: ""} <div id="d-area"> ${q.type === "mcq" ? q.opts.map((o, i) =>${o}).join("") : Comprobar dictado} </div> <div id="d-fb" class="hidden"></div> <div style="margin-top:16px; text-align:right;"><button class="btn" id="d-next" disabled>Siguiente →</button></div> </div> ;
if (q.audio) {
$("d-play").onclick = () => proSpeak(q.audio, 0.95);
$("d-slow").onclick = () => proSpeak(q.audio, 0.65);
proSpeak(q.audio, 0.95);
}
if (q.type === "mcq") {
document.querySelectorAll("#d-area .option-btn").forEach(btn => {
btn.onclick = () => {
if (diagAnswered) return;
diagAnswered = true;
const chosen = Number(btn.dataset.idx);
const ok = chosen === q.ans;
document.querySelectorAll("#d-area .option-btn").forEach((b, i) => {
b.disabled = true;
if (i === q.ans) b.classList.add("correct");
else if (i === chosen) b.classList.add("wrong");
});
handleDiagResult(ok, skill, q.exp);
};
});
} else {
$("d-dict-btn").onclick = () => {
if (diagAnswered) return;
const val = $("d-dict").value.trim().toLowerCase().replace(/[.,!?']/g, "");
if (!val) return;
diagAnswered = true;
$("d-dict").disabled = true; $("d-dict-btn").disabled = true;
const ok = val === q.ans.toLowerCase().replace(/[.,!?']/g, "");
handleDiagResult(ok, skill, q.exp);
};
}
$("d-next").onclick = () => {
diagStep++;
if (diagStep < 15) renderDiagStep(prof);
else finishProDiag(prof);
};
}
function handleDiagResult(ok, skill, exp) {
if (ok) {
diagStats[skill].ok++;
if (diagLvlIdx < 5) diagLvlIdx++;
} else if (diagLvlIdx > 0) {
diagLvlIdx--;
}
const fb = $("d-fb");
fb.className = "feedback-box " + (ok ? "feedback-ok" : "feedback-err");
fb.innerHTML = <strong>${ok ? "¡Correcto!" : "Detalle:"}</strong> ${exp};
fb.classList.remove("hidden");
$("d-next").disabled = false;
}
function finishProDiag(prof) {
const evalLvls = ["A1", "A2", "B1", "B2", "C1", "C2"];
const totalOk = diagStats.grammar.ok + diagStats.listening.ok + diagStats.reading.ok;
const finalLvl = totalOk <= 2 ? "Pre-A1" : evalLvls[diagLvlIdx];
const gPct = Math.round((diagStats.grammar.ok / 5) * 100);
const lPct = Math.round((diagStats.listening.ok / 5) * 100);
const rPct = Math.round((diagStats.reading.ok / 5) * 100);
const weakest = gPct <= lPct && gPct <= rPct ? "Gramática" : (lPct <= rPct ? "Oído y Dictado" : "Lectura");
const store = getStoredState();
const p = store.data.profiles.find(x => x.id === prof.id);
p.level = finalLvl;
p.completedLevels = PRO_LEVELS.slice(0, PRO_LEVELS.indexOf(finalLvl));
p.proReport = { grammar: gPct, listening: lPct, reading: rPct, weakest };
localStorage.setItem(store.key, JSON.stringify(store.data));
$("view-test").innerHTML = <div class="card" style="padding:24px;"> <h2>📊 Boletín de Diagnóstico Real</h2> <p class="muted" style="margin-bottom:14px;">Resultado oficial de ${p.name}</p> <div style="background:var(--bg); padding:16px; border-radius:12px; border:1px solid var(--primary); margin-bottom:16px;"> <div class="muted">Nivel Asignado:</div> <div style="font-size:1.5rem; font-weight:800; color:#60a5fa;">${PRO_INFO[finalLvl].title}</div> <div class="muted" style="margin-top:4px;">Prioridad a reforzar: <strong style="color:#fbbf24;">${weakest}</strong></div> </div> <p style="margin-bottom:6px;">📘 Gramática: <strong>${gPct}% (${diagStats.grammar.ok}/5)</strong></p> <p style="margin-bottom:6px;">🎧 Oído y Dictado: <strong>${lPct}% (${diagStats.listening.ok}/5)</strong></p> <p style="margin-bottom:18px;">📖 Lectura: <strong>${rPct}% (${diagStats.reading.ok}/5)</strong></p> <button class="btn" style="width:100%;" id="btn-go-dash">Ir a mi Ruta de Aprendizaje →</button> </div>;
$("btn-go-dash").onclick = () => window.selectProfile(p.id);
}
// MAPA CON EXÁMENES FINALES OBLIGATORIOS AL 100% PARA AVANZAR
function enhanceDashboardWith100Rule(prof) {
const store = getStoredState();
const p = store ? store.data.profiles.find(x => x.id === prof.id) : prof;
const list = $("roadmap-list");
if (!list) return;
const curIdx = PRO_LEVELS.indexOf(p.level || "Pre-A1");
const rep = p.proReport ? <div class="card" style="border-color:var(--primary); padding:12px 16px;"> <strong>📊 Diagnóstico:</strong> Gramática ${p.proReport.grammar}% · Oído ${p.proReport.listening}% · Lectura ${p.proReport.reading}% · Reforzar: <span style="color:#fbbf24;">${p.proReport.weakest}</span> </div> : "";
list.innerHTML = rep + PRO_LEVELS.map((lvl, idx) => {
const info = PRO_INFO[lvl];
const done = (p.completedLevels || []).includes(lvl);
const cur = lvl === p.level;
const locked = idx > curIdx && !done;
return <div class="level-card ${done ? "completed" : cur ? "current" : locked ? "locked" : ""}" style="flex-wrap:wrap;"> <div style="display:flex; align-items:center; gap:12px; flex:1; min-width:220px;"> <div class="level-tag">${lvl}</div> <div> <strong>${info.title}</strong> ${done ? "✅" : ""} <div class="muted">${info.desc}</div> </div> </div> <div style="display:flex; gap:8px;"> ${locked ?🔒 Bloqueado:
📚 Practicar
<button class="btn ${cur ? "" : "btn-accent"} btn-sm" onclick="window._runProModule('${lvl}','exam')">🎓 Examen 100%
} </div> </div> ;
}).join("");
}
window._runProModule = function (lvl, kind) {
["view-profiles", "view-test", "view-dashboard"].forEach(v => { if ($(v)) $(v).classList.add("hidden"); });
$("view-lesson").classList.remove("hidden");
const items = kind === "exam" ? PRO_CURRICULUM[lvl].exam : PRO_CURRICULUM[lvl].lessons;
let step = 0, correct = 0, mistakes = [];
function renderStep() {
const box = $("lesson-container");
const item = items[step];
if ($("lesson-progress")) $("lesson-progress").style.width = ${((step + 1) / items.length) * 100}%;
if ($("lesson-mode-badge")) $("lesson-mode-badge").textContent = kind === "exam" ? 🎓 Examen ${lvl} (Meta: 100%) : 📚 Práctica ${lvl};
if (kind === "lesson" && item.type === "speak") {
box.innerHTML = <h3>${item.prompt}</h3> <div class="card" style="background:var(--bg); margin:12px 0;"> <p style="font-size:1.2rem; font-weight:700; color:#34d399; margin-bottom:8px;">"${item.english}"</p> <button class="btn btn-outline btn-sm" id="sp-listen">🔊 Escuchar modelo</button> </div> <div class="feedback-box feedback-ok">💡 ${item.exp}</div> <div style="margin-top:16px; text-align:right;"><button class="btn" id="sp-done">Continuar →</button></div>;
$("sp-listen").onclick = () => proSpeak(item.english, 0.9);
$("sp-done").onclick = next;
return;
}
const promptTxt = kind === "exam" ? item.q : item.prompt;
const opts = kind === "exam" ? item.opts : item.options;
const audioTxt = kind === "exam" ? item.audio : item.english;
box.innerHTML = <div style="display:flex; justify-content:space-between; margin-bottom:8px;"> <span class="muted">Paso ${step + 1} de ${items.length}</span> ${kind === "exam" ?Requisito: 100% sin fallos: ""} </div> <h3 style="margin-bottom:12px;">${promptTxt}</h3> ${audioTxt ?
🔊 Escuchar
🐢 Lento
: ""} <div id="m-opts">${opts.map((o, i) =>${o}).join("")}</div> <div id="m-fb" class="hidden"></div> <div style="margin-top:16px; text-align:right;"><button class="btn" id="m-next" disabled>Siguiente →</button></div> ;
if (audioTxt) {
$("m-play").onclick = () => proSpeak(audioTxt, 0.95);
$("m-slow").onclick = () => proSpeak(audioTxt, 0.65);
proSpeak(audioTxt, 0.95);
}
document.querySelectorAll("#m-opts .option-btn").forEach(b => {
b.onclick = () => {
const chosen = Number(b.dataset.i);
const ok = chosen === item.ans;
document.querySelectorAll("#m-opts .option-btn").forEach((btn, i) => {
btn.disabled = true;
if (i === item.ans) btn.classList.add("correct");
else if (i === chosen) btn.classList.add("wrong");
});
if (ok) correct++;
else mistakes.push({ q: promptTxt, exp: item.exp });
const fb = $("m-fb");
fb.className = "feedback-box " + (ok ? "feedback-ok" : "feedback-err");
fb.innerHTML = <strong>${ok ? "¡Correcto!" : "Error:"}</strong> ${item.exp};
fb.classList.remove("hidden");
$("m-next").disabled = false;
};
});
$("m-next").onclick = next;
}
function next() {
step++;
if (step < items.length) {
renderStep();
return;
}
const box = $("lesson-container");
const store = getStoredState();
const p = store.data.profiles.find(x => x.id === proActiveProfile.id);
if (kind === "lesson") {
p.xp = (p.xp || 0) + 25;
localStorage.setItem(store.key, JSON.stringify(store.data));
box.innerHTML = <div style="text-align:center; padding:16px;"> <h3>📚 ¡Práctica de ${lvl} completada! (+25 XP)</h3> <p class="muted" style="margin:10px 0 18px;">Ahora aprueba el Examen Final con <strong>100%</strong> para desbloquear el siguiente nivel.</p> <button class="btn" onclick="window._runProModule('${lvl}','exam')">🎓 Hacer Examen Final (100%)</button> </div>;
} else if (correct === items.length) {
p.xp = (p.xp || 0) + 100;
if (!p.completedLevels) p.completedLevels = [];
if (!p.completedLevels.includes(lvl)) p.completedLevels.push(lvl);
const idx = PRO_LEVELS.indexOf(lvl);
if (idx < PRO_LEVELS.length - 1 && PRO_LEVELS.indexOf(p.level) <= idx) p.level = PRO_LEVELS[idx + 1];
localStorage.setItem(store.key, JSON.stringify(store.data));
box.innerHTML = <div style="text-align:center; padding:16px;"> <div style="font-size:2.8rem;">🏆</div> <h2 style="color:#34d399; margin:8px 0;">¡100% APROBADO! (${correct}/${items.length})</h2> <p style="margin-bottom:18px;">${lvl === "C2" ? "¡Has alcanzado la Maestría Total C2!" :Has desbloqueado el nivel ${p.level} (+100 XP).}</p> <button class="btn" onclick="window.selectProfile(${p.id})">Volver al Mapa →</button> </div> ;
} else {
const pct = Math.round((correct / items.length) * 100);
box.innerHTML = <div> <h2 style="color:#ef4444; margin-bottom:6px;">❌ No aprobaste (${pct}% · ${correct}/${items.length})</h2> <p class="muted" style="margin-bottom:14px;">Para avanzar de <strong>${lvl}</strong> necesitas <strong>100% (${items.length}/${items.length})</strong>. Revisa tus fallos:</p> ${mistakes.map(m =>${m.q}
💡 ${m.exp}).join("")} <div style="display:flex; gap:10px; margin-top:16px; flex-wrap:wrap;"> <button class="btn" onclick="window._runProModule('${lvl}','exam')">🔄 Repetir Examen (Buscar 100%)</button> <button class="btn btn-outline" onclick="window._runProModule('${lvl}','lesson')">📚 Repasar Lección</button> </div> </div> ;
}
}
renderStep();
};
})();

---
