export const tool = {
  "id": "E014",
  "title": "열팽창 길이 변화 계산기",
  "inputs_text": "초기 길이 L₀ [m], 선팽창계수 α [1/K], 온도 변화 ΔT [K]",
  "formula": "ΔL = α L₀ ΔT",
  "output_text": "자유 열팽창 길이 변화 ΔL [m]",
  "assumptions": "L₀>0. α를 일정하게 볼 수 있는 온도 구간과 작은 변형에 한정한다. 구속이 없는 부재이며 온도 감소에 따른 수축은 음수로 표시한다.",
  "purpose": "열팽창 길이 계산 / 조립 간극·금속봉 실험",
  "sources": [
    {
      "label": "OpenStax · Thermal Expansion",
      "url": "https://openstax.org/books/university-physics-volume-2/pages/1-3-thermal-expansion"
    }
  ],
  "slug": "eng-thermal-expansion",
  "category": "열",
  "result_label": "자유 열팽창 길이 변화 ΔL",
  "result_dimension": "length",
  "fields": [
    {
      "key": "l",
      "label": "초기 길이 L₀",
      "dimension": "length",
      "example": 2,
      "constraint": "positive",
      "display_unit": "m",
      "display_value": "2"
    },
    {
      "key": "alpha",
      "label": "선팽창계수 α",
      "dimension": "expansion",
      "example": 1.2e-05,
      "constraint": "signed",
      "display_unit": "microK",
      "display_value": "12"
    },
    {
      "key": "dt",
      "label": "온도 변화 ΔT",
      "dimension": "deltaT",
      "example": 50,
      "constraint": "signed",
      "display_unit": "Kdiff",
      "display_value": "50"
    }
  ],
  "site": "https://nanalab.kr/eng-thermal-expansion/",
  "repository": "https://github.com/NaNaCompany/eng-thermal-expansion",
  "condition": "",
  "output_unit": "mm"
};
