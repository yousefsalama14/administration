/************************        Claims by insurance companies                       **************************/

var dom = document.getElementById("chart-1");
var myChart = echarts.init(dom, 'shine');
var app = {};
option = null;
app.title = '';
option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product'              , 'Company 1' , 'Company 2' , 'Company 3' , 'Company 4'],
            ['Submitted Invoices'   , 41.1              , 30.4              , 65.1              , 53.3],
            ['Denied Services'      , 86.5              , 92.1              , 85.7              , 83.1],
            ['Right-off Claims'     , 24.1              , 67.2              , 79.5              , 86.4]
        ]
    },
    xAxis: [
        {type: 'category', gridIndex: 0},
    ],
    yAxis: [
        {gridIndex: 0},
    ],

    series: [
        // These series are in the first grid.
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'}
    ]
};


myChart.setOption(option);

/************************        Aging by insurance companies       **************************/
var dom = document.getElementById("chart-2");
var myChart = echarts.init(dom, 'shine');
var app = {};
option = null;
app.title = '';
option = {
    legend: {},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['01/2020', '02/2020', '03/2020', '04/2020', '05/2020', '06/2020', '07/2020']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Company 1',
            type: 'line',
            stack: 'TimeBar',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Company 2',
            type: 'line',
            stack: 'TimeBar',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Company 3',
            type: 'line',
            stack: 'TimeBar',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Company 4',
            type: 'line',
            stack: 'TimeBar',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Company 5',
            type: 'line',
            stack: 'TimeBar',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

myChart.setOption(option);

/************************        Revenue Classified among insurance Companies                              **************************/
var dom = document.getElementById("chart-3");
var myChart = echarts.init(dom, 'shine');
var app = {};
option = null;
app.title = '';
option = {
    legend: {},
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['45Y - 49Y', '50Y - 54Y', '55Y - 69Y', '60Y - 64Y', '65Y - 69Y']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'InPatient',
            type: 'line',
            data: [70, 140, 160, 170, 150, 200, 220]
        },
        {
            name: 'OutPatient',
            type: 'line',
            data: [70, 220, 160, 190, 160, 180, 200]
        },
        {
            name: 'ER',
            type: 'line',
            data: [80, 90, 100, 120, 140, 150, 180]
        },
    ]
};

myChart.setOption(option);

/************************        Claim Denial /Reasons                              **************************/
var dom = document.getElementById("chart-4");
var myChart = echarts.init(dom, 'shine');
var app = {};
option = null;
app.title = '';
option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product'              , 'Company 1' , 'Company 2' , 'Company 3' , 'Company 4'],
            ['No Enough Reasons'    , 41.1              , 30.4              , 65.1              , 53.3],
            ['Illegal Request'      , 86.5              , 92.1              , 85.7              , 83.1],
            ['Out of Contract'      , 24.1              , 67.2              , 79.5              , 86.4]
        ]
    },
    xAxis: [
        {type: 'category', gridIndex: 0},
    ],
    yAxis: [
        {gridIndex: 0},
    ],

    series: [
        // These series are in the first grid.
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'}
    ]
};

myChart.setOption(option);

/************************        Claim Denial by Procedure                          **************************/
var dom = document.getElementById("chart-5");
var myChart = echarts.init(dom, 'shine');
var app = {};
option = null;
app.title = '';
option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['Procedures'              , '01/2020' , '02/2020' , '03/2020' , '04/2020'],
            ['Procedure 1'   , 41.1              , 30.4              , 65.1              , 53.3],
            ['Procedure 2'      , 86.5              , 92.1              , 85.7              , 83.1],
            ['Procedure 3'     , 24.1              , 67.2              , 79.5              , 86.4]
        ]
    },
    xAxis: [
        {type: 'category', gridIndex: 0},
    ],
    yAxis: [
        {gridIndex: 0},
    ],

    series: [
        // These series are in the first grid.
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'}
    ]
};

myChart.setOption(option);

/************************        Sum of Charges/Procedure Code                      **************************/
var dom = document.getElementById("chart-6");
var myChart = echarts.init(dom, 'shine');
var app = {};
option = null;
app.title = '';
option = {

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    series: [
        {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                {value: 535, name: 'Procedures 01'},
                {value: 535, name: 'Procedures 02'},
                {value: 510, name: 'Procedures 03'},
                {value: 634, name: 'Procedures 04'},
                {value: 735, name: 'Procedures 05'},
                {value: 535, name: 'Procedures 06'},
                {value: 535, name: 'Procedures 07'},
                {value: 510, name: 'Procedures 08'},
                {value: 634, name: 'Procedures 09'},
                {value: 735, name: 'Procedures 10'},
                {value: 735, name: 'All Remaining'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myChart.setOption(option);