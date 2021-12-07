import React from "react";

function Panel() {
    return (
        <div className="button-panel">
            <div>
                <div className="button"><button>AC</button></div>
                <div className="button"><button>+/-</button></div>
                <div className="button"><button>%</button></div>
                <div className="button orange"><button>÷</button></div>
            </div>
            <div>
                <div className="button"><button>7</button></div>
                <div className="button"><button>8</button></div>
                <div className="button"><button>9</button></div>
                <div className="button orange"><button>x</button></div>
            </div>
            <div>
                <div className="button"><button>4</button></div>
                <div className="button"><button>5</button></div>
                <div className="button"><button>6</button></div>
                <div className="button orange"><button>-</button></div>
            </div>
            <div>
                <div className="button"><button>1</button></div>
                <div className="button"><button>2</button></div>
                <div className="button"><button>3</button></div>
                <div className="button orange"><button>+</button></div>
            </div>
            <div>
                <div className="button  wide"><button>0</button></div>
                <div className="button"><button>.</button></div>
                <div className="button orange"><button>=</button></div>
            </div>
        </div>

    )
}

export default Panel;
