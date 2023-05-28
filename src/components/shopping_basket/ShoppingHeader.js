import "./ShoppingHeader.css";

const menuIconImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAhAQMAAACsrRqAAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlP/AOW3MEoAAAAUSURBVHicY2DAAf6DwQea0YPMXgCZ+6XxJRwbQwAAAABJRU5ErkJggg== "
const iconImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAATCAYAAAAAs5Y/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+dJREFUeNrsWuGxmzAMJrkO4A1KJyjdgGxANyATPDLBcyYgG5ANyAbQCZINyAZkAwrvTM/PJ9mSce5eeuhOP5LYkmwJSZ/IZhiGaKWVvjpt1kBd6RVoO/Jg4W7kHNmbAutTY03hkK9zD+hoGPsl49ydkv0MikeuRxbE9dAdJcha6D4w/0jiHeXK3l7zeW2RGyn7TNmFx13NujstBmDdA43KKfManALrUmONHHhk6mgYeyWwH2Ldpoy4h8OzzZWHPdg9zpwDa7uRhbEuHrl3yE3UXhtd1TqK7yXjjmIl20adrnvLeOrj/6CCTFnuTftcBpafalUlt2RGXzqP3AIZ3Mxm70BG1/cmKju7fDqvSwJXnCtBZqzr/gYsOI78HUi/ObO8TnRCvv85cmZ81yK2/AG+fwMc8SDYUxr7YnUmGcgJFaBvFzhYD8rR5n2c1B0kgO8eat/8sHJaE6HO9SuQ/VzdU7D+iCzlt3Kk9pRRsiKj5PRAiRHEsgGVv4qoF6KeoZtbwgdlb6jSP3NpuQOoXSq0vQXwe63K8VyWa8c5fEs/5LtGK/ExEHcfsrFATYH+JUSgCkBuj/RBEGfIQTm94+AZ6K6eq7f0WiJwoApEX4Ho1/degSCl3FcdIFBrou/MYO0iBljJFwaqQBpoapAuycQZ4XzJgkCtFgA96VmZCqLfTFkmxYw7Wxqopv8yy4P/iahgaupxLgH6N7OB3o98IzbgjdHbTDb9ZvSmOt0VRwGAVeoY5czgJjQYPRHu7oL0/pTe/hGFJyquuENzVEqQ7hcaXgHg6aiQKOVwNRCkO+hAyDwxBnQfgYDLPM4GBfiNALRCASub3w6EAMwsD6DrTFxqHTp04O6cozaKpSovWGmglv58YU/YeAAUWy+n90Wdo5/zKb8NIhu7H9/Sj/V9rlJcARghJZT9MkDplwRfQi1eHRGG7tGCQM2QITJVR+lAsD69Y+qwTy54CHT5GQHY+LwUkQQgZwNwMSJ3Tk7YID52+N5GjePOrko39tClzw5UjhN6QMcSBybIGMaVsanjqpJQKRqCnUsDFZKRDX6jtCVAmhKoWIV1vhXdRl+HRGB5JbGnOwJ2uIBVgrzbPjo+z8P50MBKav16SwC+0vIyJvLEEpy3a3vG2gMVTL0iJUCjfkLAF+RYCoqHHHoHZJ+BB+H9icDqwFi/s0wFWvW7fIKtZ4fum5ro/AvozUf9/4wIqehOAFnlZKDKhIGkb0jAULPPRbNdqL1CO9fZMrkw198dWSQzRm02+dA9tZqTBPOfR5dACNwc/8WGL1xTnoJRBW+WLC+Mu4RGh+v/UVd6DVoDdaWXoL8CDACB/ewGUL09IwAAAABJRU5ErkJggg=="
const pizzaIconImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA4CAYAAAHFvesGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABWhJREFUeNpi/P//PwMaEADiDyAGE5qEAkwCDEA6/0MAMv0eRMN0MgJxAJQGAUGwIBY74YAJi9h5kG34dIIFAQIImyRIgBHZyPeo0hAng7AAEhvsiPtQp98nZAdYkgmbi9AtZ0AKCQaAAMIbCjCno7PRTUsA4v1I/AVA3ABlH0C2Cdk0dNORxQSR454RyRYDLBpg/imAxhFKgKJjBSQallbWgx2GRXEAGv8+EJ8H4gQo34BQ6KEDULwLAAQQPucxICXfBGQxFjymgoJaHhpqDrhSFjL+jxYg75Hl0f1ETJzBU8R9qBOQk4wAmgYHZOchO6UBiOejOwcqDleHHEIwAwyg8YLTn7g8j44NoLYRFRBEFxzIORHGfo8Udwy43P0f6q8AbPLoznsPTQHoORaWPf5jKwcE0eILpvgBNN4UiSkjsJYZAAFETCrHh89D/RkALRX/o+cIbHFLDDaAGvYej8XzybVoP9TwAjz5GpZicZqDq9yCuVoAR1H1H0c2wJnqYYz5UAUNBOLCgcg4W4/LImwu/A8tWInNo//xqUNXPB9LaXcfW/mKxzcN2FIfvvrlPxGGMxDpQwZSKmhSAUZVS6rm/2gV/39oFQ0C85HKH0ekFgzJPkLmG8DreNxqcDZTGLAUfv+RGnYTkOQuQA1hhBaQIPn1aJZOgPqSgdKyDht2gCaEfuREwcJAfXAAyVcBsCoaIAAtZnikIAyEUc6xAEugBO2A60ArMFYgVqBWQAneVWAJlKAdYAeUgDCTddbPXZKsmhn+CHETkux7yydmUCmHO0PHtTZaF1L7f+DssyEmQoxKkIaR8BZz7lJnVHt27xh6+QCSVQNbCSLwpwzgVz+R4wudB4jq/P06tGlCRqyRU4PjUmOWFCAEwWYEgk4jbwqiKzjxWSrKSZM6xRGKmAPJBqoG0l4DDiCXXAA2BfXJpUBOmQ0SthrZXbz/WVpfFMMldK6lMiRQsxXScZBe1UnYgefA+szYcxdpUNo3iAFqC0OiLb0jnF5yXkCd3jGgIgYTC5/POiNCjv21TcGEVbdyj5IfCyZK0CyeuUnDnP/thg9NE4FHVCXg1VDC00a6vgu+o1+/xqtVAbtz018V0zFnDcR9bg6mM7Q9m83gEOtY8HVQ+R2UhNsqCbWLLS1b+KMswKiZNRCll7nBUJ+S7TeUuGUBHq978gUlHgqDFftIs7YKZPq3wT7OXYBqrfY2QhiGXjsBIzACI9ANMgIblBG8AeoEuQ1OnSAjtBvQDbgNqHRKpMiyE5skXGuJPwhQnh1/5D1auE5zTWjHYrPab54NoI96acgaYGYiK51NzwZkonQOU+MofE8y5DUH1KEo7IkocOVljSLYPwPQiKKwCqMQHADIAYvCAVUAUYuwyih8IQeYGs7VRqFkEYAqmhVsJ9BWO0kUtIuIjyYOVbTpQFXcNXN57UXMyAFOm9QJvh2kgEoWEY6zuK+UALBMk12lgKwysXFfcURFGzOETm78BOa+0Ww5g+beITMV2ozec4SV5/JlLmG0OlTN5gQ7wpk72EdswqH7UW2KKpslizzS41zCWUuNPjQIt2PLa5CU8FLvLSeDykmmRQevndCKWpvxfMZP0M9rSBGtAPX+uuDfdZCt/rk38plCqm8XFJMtsUV6oqk71OeA+barfXyQAAIC3ETMaUMmZxaGfO9rymxSg0gy/YgE4DViJr+Zdz8jfTfYPdKq3s/ecpColktiCI5nROrUypbwGkMk7kuztKsz4OJ8GrQlvAaLc0MLSRUBLbgtcZSfKKnu2bycBhzFU2xYWPnLgDC4GwEOsF7WmqJtYZ2vlAbdf8gvr5f/Z3dPnr94Iv3q7z3+ZfgFs17c6KlsbuIAAAAASUVORK5CYII="
function shoppingHeader() {
    return (
        //메뉴 헤더 부분
        <body>
        <div className="web-main-tab-top">
            <div className="tab-top-left">
                <img src= {menuIconImg}
                     alt="menu icon img" className="web-icon-menu"></img>
                <img src={iconImg}
                     alt="icon img" className="web-icon-logo"></img>
            </div>
            <div className="tab-top-middle">
                <span className="top-middle-text">피자</span>
                <span className="top-middle-text">스페셜반반피자</span>
                <span className="top-middle-text">세트</span>
                <span className="top-middle-text">사이드</span>
                <span className="top-middle-text">하프앤하프</span>
                <span className="top-middle-text">멤버십 ˙ 제휴할인</span>
                <span className="top-middle-text">이벤트</span>
            </div>
            <div className="tab-top-right">
                <div className="tab-text-img-layout">
                    <div className="top-right-text-layout">
                        <span className="top-right-text">마이페이지</span>
                        <span className="top-right-text">회원가입</span>
                        <span className="top-right-text">로그인</span>
                    </div>
                    <img src= {pizzaIconImg}
                    alt="pizza icon img" className="web-icon-pizza">
                    </img>
                </div>
            </div>
        </div>
        </body>
    )
}

export default shoppingHeader;