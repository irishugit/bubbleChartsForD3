var BUBBLE_PARAMETERS = {
    "data_file": "biggest-data-breaches.csv",
    "map_file": "us.json",
    "report_title": "Biggest Data Breaches",
    "footer_text": "Source: databreaches.net",
    "width": 1500,
    "height": 800,
    "force_strength": 0.006,
    "force_type": "charge",
    "radius_field": "NO OF RECORDS STOLEN",
    "numeric_fields": ["YEAR", "NO OF RECORDS STOLEN"],
    "bubble_text_color":"white",
    "bubble_hover_text_color":"black",
    "fill_color": {
        "data_field": "DATA SENSITIVITY",
        "color_groups": {
            "1": "#107c10",
            "20": "#008272",
            "300": "#0078d7",
            "4000": "#b4009e",
            "50000": "#d83b01"
        }
        // "color_groups": {
        //     "1": "#e3008c",
        //     "20": "#0078d7",
        //     "300": "#00b294",
        //     "4000": "#bad80a",
        //     "50000": "#ff8c00"
        // }
    },
    "tooltip": [
        {"title": "Name", "data_field": "Entity"},
        {"title": "Type", "data_field": "METHOD OF LEAK"},
        {"title": "Records Lost", "data_field": "records lost"},
    ],
    "modes": [
        {
            "button_text": "全部泄露事件\nAll Breaches",
            "button_id": "all",
            "type": "grid",
            "labels": null,
            "grid_dimensions": {"rows": 1, "columns": 1},
            "data_field": null
        },
        {
            "button_text": "数据泄露起因\nType of Breach",
            "button_id": "breach",
            "type": "grid",
            "labels": ["Hacked", "Poor Security", "Inside Job", "Leak", "Stolen Media/Computer"],
            "texts":["黑客攻击,Hacked", "安全性差,Poor Security", "内部作案,Inside Job", "数据外泄,Leak", "偷盗,Stolen Media/Computer"],
            "grid_dimensions": {"rows": 1, "columns": 5},
            "data_field": "METHOD OF LEAK"
        },
        {
            "button_text": "时间\nTimeline",
            "button_id": "time",
            "type": "scatterplot",
            "x_data_field": "YEAR",
            "y_data_field": "NO OF RECORDS STOLEN",
            "x_format_string": ",.2r",
            "y_format_string": ",.2r"
        },
        {
            "button_text": "数据泄露方性质\nType of Organization",
            "button_id": "org",
            "type": "grid",
            "labels": ["Government", "Academic", "Energy", "Financial", "Healthcare", "Internet", "Media", "Retail", "Services", "Transporation", "Telecom", "Tech"],
            "texts": ["政府,Government", "学术机构,Academic", "能源,Energy", "金融,Financial", "医疗,Healthcare", "互联网,Internet", "媒体,Media", "零售,Retail", "服务业,Services", "交通,Transporation", "电信,Telecom", "科技,Tech"],
            "grid_dimensions": {"rows": 3, "columns": 4},
            "data_field": "ORGANISATION"
        },
        {
            "button_text": "数据敏感程度\nData Sensitivity",
            "button_id": "sensititity",
            "type": "grid",
            "labels": ["Personal Details","Online Information","Banks Account Details" ,"Credit Card Information", "Email Password/Health Records"],
            "texts": ["个人资料,Personal Details","网上信息,Online Information","银行账户信息,Bank Account Details" ,"信用卡信息,Credit Card Information", "电子邮件密码/健康档案,Email Password/Health Records"],
            "grid_dimensions": {"rows": 1, "columns": 5},
            "data_field": "DATA SENSITIVITY"
        }
    ],
    "datas":[
        {
            "Entity": "Yale University", 
            "YEAR": "2010", 
            "records lost": "43,000", 
            "ORGANISATION": "Academic", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "40000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Kirkwood Community College", 
            "YEAR": "2013", 
            "records lost": "125,000", 
            "ORGANISATION": "Academic", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "130000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Ohio State University", 
            "YEAR": "2010", 
            "records lost": "760,000", 
            "ORGANISATION": "Academic", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "800000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "University of California Berkeley", 
            "YEAR": "2009", 
            "records lost": "160,000", 
            "ORGANISATION": "Academic", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "160000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "University of Wisconsin - Milwaukee", 
            "YEAR": "2011", 
            "records lost": "73,000", 
            "ORGANISATION": "Academic", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "73000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Indiana University", 
            "YEAR": "2013", 
            "records lost": "146,000", 
            "ORGANISATION": "Academic", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "150000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Stanford University", 
            "YEAR": "2008", 
            "records lost": "72,000", 
            "ORGANISATION": "Academic", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "72000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "University of Miami", 
            "YEAR": "2008", 
            "records lost": "2,100,000", 
            "ORGANISATION": "Academic", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "2100000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "University of Utah Hospitals & Clinics", 
            "YEAR": "2008", 
            "records lost": "2,200,000", 
            "ORGANISATION": "Academic", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "2200000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Invest Bank", 
            "YEAR": "2015", 
            "records lost": "40,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "40000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Central Hudson Gas & Electric", 
            "YEAR": "2013", 
            "records lost": "110,000", 
            "ORGANISATION": "Energy", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "100000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "GS Caltex", 
            "YEAR": "2008", 
            "records lost": "11,100,000", 
            "ORGANISATION": "Energy", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "11100000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "New York State Electric & Gas", 
            "YEAR": "2012", 
            "records lost": "1,800,000", 
            "ORGANISATION": "Energy", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "1800000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Cardsystems Solutions Inc.", 
            "YEAR": "2005", 
            "records lost": "40,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "40000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "CheckFree Corporation", 
            "YEAR": "2009", 
            "records lost": "5,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "5000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Citigroup", 
            "YEAR": "2011", 
            "records lost": "360,083", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "400000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Data Processors International", 
            "YEAR": "2008", 
            "records lost": "5,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "5000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "European Central Bank", 
            "YEAR": "2014", 
            "records lost": "4,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "4000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Global Payments", 
            "YEAR": "2012", 
            "records lost": "7,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1500000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Heartland", 
            "YEAR": "2009", 
            "records lost": "130,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "130000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "JP Morgan Chase", 
            "YEAR": "2014", 
            "records lost": "76,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "76000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Massive American business hack", 
            "YEAR": "2012", 
            "records lost": "160,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "160000000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "NASDAQ", 
            "YEAR": "2014", 
            "records lost": "500,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "500000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "RBS Worldpay", 
            "YEAR": "2008", 
            "records lost": "1,500,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1500000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "TD Ameritrade", 
            "YEAR": "2007", 
            "records lost": "6,300,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "6300000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Three Iranian banks", 
            "YEAR": "2012", 
            "records lost": "3,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "3000000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "US Federal Reserve Bank of Cleveland", 
            "YEAR": "2010", 
            "records lost": "400,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "400000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Compass Bank", 
            "YEAR": "2007", 
            "records lost": "1,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "1000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Countrywide Financial Corp", 
            "YEAR": "2011", 
            "records lost": "2,500,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "2500000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Countrywide Financial Corp", 
            "YEAR": "2006", 
            "records lost": "2,600,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "2600000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Court Ventures", 
            "YEAR": "2012", 
            "records lost": "200,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "200000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Fidelity National Information Services", 
            "YEAR": "2007", 
            "records lost": "8,500,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "8500000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Korea Credit Bureau", 
            "YEAR": "2014", 
            "records lost": "20,000,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "20000000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Automatic Data Processing", 
            "YEAR": "2005", 
            "records lost": "125,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "130000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Citigroup", 
            "YEAR": "2013", 
            "records lost": "150,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "150000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Ameritrade Inc.", 
            "YEAR": "2005", 
            "records lost": "200,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "200000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "BNY Mellon Shareowner Services", 
            "YEAR": "2008", 
            "records lost": "12,500,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "12500000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Citigroup", 
            "YEAR": "2005", 
            "records lost": "3,900,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "3900000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Educational Credit Management Corp", 
            "YEAR": "2010", 
            "records lost": "3,300,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "3300000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "JP Morgan Chase", 
            "YEAR": "2010", 
            "records lost": "2,600,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "2600000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Morgan Stanley Smith Barney", 
            "YEAR": "2011", 
            "records lost": "34,000", 
            "ORGANISATION": "Financial", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "35000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Bethesda Game Studios", 
            "YEAR": "2011", 
            "records lost": "200,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "200000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Blizzard", 
            "YEAR": "2012", 
            "records lost": "14,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "14000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Nintendo", 
            "YEAR": "2013", 
            "records lost": "240,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "250000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Sega", 
            "YEAR": "2011", 
            "records lost": "1,290,755", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1300000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Sony Online Entertainment", 
            "YEAR": "2011", 
            "records lost": "24,600,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "24600000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Sony PSN", 
            "YEAR": "2011", 
            "records lost": "77,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "77000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "UbiSoft", 
            "YEAR": "2013", 
            "records lost": "58,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "58000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Australian Immigration Department", 
            "YEAR": "2015", 
            "records lost": "500,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "500000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Chile Ministry Of Education", 
            "YEAR": "2008", 
            "records lost": "6,000,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "6000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Jefferson County", 
            "YEAR": "2008", 
            "records lost": "1,600,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "1600000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Norwegian Tax Authorities", 
            "YEAR": "2008", 
            "records lost": "3,950,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "4000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Office of the Texas Attorney General", 
            "YEAR": "2012", 
            "records lost": "6,500,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "6500000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "State of Texas", 
            "YEAR": "2011", 
            "records lost": "3,500,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "3500000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "US Law Enforcement", 
            "YEAR": "2011", 
            "records lost": "123,461", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "130000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Clinton campaign", 
            "YEAR": "2016", 
            "records lost": "5,000,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "5000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Greek government", 
            "YEAR": "2012", 
            "records lost": "9,000,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "9000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Medicaid", 
            "YEAR": "2012", 
            "records lost": "780,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "800000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Philippines Commission on Elections", 
            "YEAR": "2016", 
            "records lost": "55,000,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "55000000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "San Francisco Public Utilities Commission", 
            "YEAR": "2011", 
            "records lost": "180,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "180000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "South Africa police", 
            "YEAR": "2013", 
            "records lost": "16,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "16000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "South Carolina State Dept. of Revenue", 
            "YEAR": "2012", 
            "records lost": "3,600,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "3600000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Syrian government", 
            "YEAR": "2016", 
            "records lost": "274,477", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "274477", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "US Office of Personnel Management", 
            "YEAR": "2015", 
            "records lost": "4,000,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "4000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "US Office of Personnel Management (2nd Breach)", 
            "YEAR": "2015", 
            "records lost": "21,500,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "21500000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Virginia Dept. Of Health", 
            "YEAR": "2009", 
            "records lost": "8,257,378", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "8300000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Washington State court system", 
            "YEAR": "2013", 
            "records lost": "160,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "160000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Classified Iraq War documents", 
            "YEAR": "2010", 
            "records lost": "392,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "400000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Embassy Cables", 
            "YEAR": "2010", 
            "records lost": "251,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "300000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Kissinger Cables", 
            "YEAR": "2013", 
            "records lost": "1,700,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "1700000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Texas Lottery", 
            "YEAR": "2007", 
            "records lost": "89,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "90000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Turkish citizenship database", 
            "YEAR": "2016", 
            "records lost": "49,611,709", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Leak", 
            "NO OF RECORDS STOLEN": "49611709", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "IRS", 
            "YEAR": "2015", 
            "records lost": "100,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "100000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Massachusetts Government", 
            "YEAR": "2011", 
            "records lost": "210,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "200000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Oregon Department of Motor Vehicles", 
            "YEAR": "2011", 
            "records lost": "1,000,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "1000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Florida Courts", 
            "YEAR": "2013", 
            "records lost": "100,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "100000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Florida Department of Juvenile Justice", 
            "YEAR": "2013", 
            "records lost": "100,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "100000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "US Dept of Vet Affairs", 
            "YEAR": "2006", 
            "records lost": "26,500,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "26500000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "California Department of Child Support Services", 
            "YEAR": "2012", 
            "records lost": "800,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "800000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "City and Hackney Teaching Primary Care Trust", 
            "YEAR": "2007", 
            "records lost": "160,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "160000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Driving Standards Agency", 
            "YEAR": "2007", 
            "records lost": "3,000,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "3000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Driving Standards Agency,", 
            "YEAR": "2007", 
            "records lost": "3,000,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "3000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Service Personnel and Veterans Agency (UK)", 
            "YEAR": "2008", 
            "records lost": "50,500", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "50000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "UK Home Office", 
            "YEAR": "2008", 
            "records lost": "84,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "84000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "UK Ministry of Defence", 
            "YEAR": "2008", 
            "records lost": "1,700,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "1700000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "UK Revenue & Customs", 
            "YEAR": "2007", 
            "records lost": "25,000,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "25000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Red Cross Blood Service", 
            "YEAR": "2016", 
            "records lost": "550000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "550000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Ankle & foot Center of Tampa Bay, Inc.", 
            "YEAR": "2010", 
            "records lost": "156,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "160000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Anthem", 
            "YEAR": "2016", 
            "records lost": "80,000,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "80000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Carefirst", 
            "YEAR": "2015", 
            "records lost": "1,100,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1100000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Community Health Systems", 
            "YEAR": "2014", 
            "records lost": "4,500,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "4500000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Premera", 
            "YEAR": "2015", 
            "records lost": "11,000,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "11000000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Puerto Rico Department of Health", 
            "YEAR": "2010", 
            "records lost": "515,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "500000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Seacoast Radiology, PA", 
            "YEAR": "2010", 
            "records lost": "231,400", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "200000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Southern California Medical-Legal Consultants", 
            "YEAR": "2011", 
            "records lost": "300,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "300000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Twitch.tv", 
            "YEAR": "2014", 
            "records lost": "10,000,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "10000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Virginia Prescription Monitoring Program", 
            "YEAR": "2009", 
            "records lost": "531,400", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "500000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "South Carolina Government", 
            "YEAR": "2012", 
            "records lost": "6,400,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "200000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Accendo Insurance Co.", 
            "YEAR": "2011", 
            "records lost": "175,350", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "180000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Emory Healthcare", 
            "YEAR": "2012", 
            "records lost": "315,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "300000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "AvMed, Inc.", 
            "YEAR": "2009", 
            "records lost": "1,220,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "1200000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Colorado government", 
            "YEAR": "2010", 
            "records lost": "105,470", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "100000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Crescent Health Inc., Walgreens", 
            "YEAR": "2013", 
            "records lost": "100,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "100000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Eisenhower Medical Center", 
            "YEAR": "2011", 
            "records lost": "514,330", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "500000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Spartanburg Regional Healthcare System", 
            "YEAR": "2011", 
            "records lost": "400,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "400000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Sutter Medical Foundation", 
            "YEAR": "2011", 
            "records lost": "4,243,434", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "4200000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Tricare", 
            "YEAR": "2011", 
            "records lost": "4,901,432", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "4900000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Advocate Medical Group", 
            "YEAR": "2013", 
            "records lost": "4,000,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "4000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Affinity Health Plan, Inc.", 
            "YEAR": "2009", 
            "records lost": "344,579", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "300000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Blue Cross Blue Shield of Tennessee", 
            "YEAR": "2009", 
            "records lost": "1,023,209", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "1000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Emergency Healthcare Physicians, Ltd.", 
            "YEAR": "2010", 
            "records lost": "180,111", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "180000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Health Net", 
            "YEAR": "2009", 
            "records lost": "1,500,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "1500000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Health Net - IBM", 
            "YEAR": "2011", 
            "records lost": "1,900,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "1900000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Lincoln Medical & Mental Health Center", 
            "YEAR": "2010", 
            "records lost": "130,495", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "130000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Memorial Healthcare System", 
            "YEAR": "2011", 
            "records lost": "102,153", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "100000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Nemours Foundation", 
            "YEAR": "2011", 
            "records lost": "1,055,489", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "1100000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "New York City Health & Hospitals Corp.", 
            "YEAR": "2010", 
            "records lost": "1,700,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "1700000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "NHS", 
            "YEAR": "2011", 
            "records lost": "8,300,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "8300000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "South Shore Hospital, Massachusetts", 
            "YEAR": "2010", 
            "records lost": "800,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "800000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Triple-S Salud, Inc.", 
            "YEAR": "2010", 
            "records lost": "398,000", 
            "ORGANISATION": "Healthcare", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "400000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Mossack Fonseca", 
            "YEAR": "2016", 
            "records lost": "11,500,000", 
            "ORGANISATION": "Services", 
            "METHOD OF LEAK": "Leak", 
            "NO OF RECORDS STOLEN": "11500000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Sony Pictures", 
            "YEAR": "2014", 
            "records lost": "10,000,000", 
            "ORGANISATION": "Media", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "10000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Washington Post", 
            "YEAR": "2011", 
            "records lost": "1,270,000", 
            "ORGANISATION": "Media", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1300000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Stratfor", 
            "YEAR": "2011", 
            "records lost": "935,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "900000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "US Army", 
            "YEAR": "2011", 
            "records lost": "50,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "50000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "US Military", 
            "YEAR": "2010", 
            "records lost": "260,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "300000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "US National Guard", 
            "YEAR": "2009", 
            "records lost": "131,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "130000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "US Dept of Defense", 
            "YEAR": "2009", 
            "records lost": "72,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "72000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "US Military", 
            "YEAR": "2009", 
            "records lost": "76,000,000", 
            "ORGANISATION": "Government", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "76000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Banner Health", 
            "YEAR": "2016", 
            "records lost": "3,700,000", 
            "ORGANISATION": "Services", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "3700000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Telegram", 
            "YEAR": "2016", 
            "records lost": "15,000,000", 
            "ORGANISATION": "Services", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "15000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Mutuelle Generale de la Police", 
            "YEAR": "2016", 
            "records lost": "112,000", 
            "ORGANISATION": "Services", 
            "METHOD OF LEAK": "Leak", 
            "NO OF RECORDS STOLEN": "112000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Privatization Agency of the Republic of Serbia", 
            "YEAR": "2016", 
            "records lost": "5,190,396", 
            "ORGANISATION": "Services", 
            "METHOD OF LEAK": "Leak", 
            "NO OF RECORDS STOLEN": "519396", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "World Check", 
            "YEAR": "2016", 
            "records lost": "2,200,000", 
            "ORGANISATION": "Services", 
            "METHOD OF LEAK": "Leak", 
            "NO OF RECORDS STOLEN": "2200000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "British Airways", 
            "YEAR": "2015", 
            "records lost": "500,000", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "500000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Hannaford Brothers Supermarket Chain", 
            "YEAR": "2007", 
            "records lost": "4,200,000", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "4200000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Home Depot", 
            "YEAR": "2014", 
            "records lost": "56,000,000", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "56000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Neiman Marcus", 
            "YEAR": "2014", 
            "records lost": "1,100,000", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1100000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Restaurant Depot", 
            "YEAR": "2011", 
            "records lost": "200,000", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "200000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Target", 
            "YEAR": "2014", 
            "records lost": "70,000,000", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "70000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "TK/TJ Maxx", 
            "YEAR": "2007", 
            "records lost": "94,000,000", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "94000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "UPS", 
            "YEAR": "2014", 
            "records lost": "4,000,000", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "4000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Wendy's", 
            "YEAR": "2016", 
            "records lost": "1,025", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1025", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Dai Nippon Printing", 
            "YEAR": "2007", 
            "records lost": "8,637,405", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "8600000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Honda Canada", 
            "YEAR": "2011", 
            "records lost": "283,000", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "300000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Gap Inc", 
            "YEAR": "2007", 
            "records lost": "800,000", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "800000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Starbucks", 
            "YEAR": "2008", 
            "records lost": "97,000", 
            "ORGANISATION": "Retail", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "100000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Apple", 
            "YEAR": "2012", 
            "records lost": "12,367,232", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "12400000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Adobe", 
            "YEAR": "2013", 
            "records lost": "36,000,000", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "36000000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Apple", 
            "YEAR": "2013", 
            "records lost": "275,000", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "300000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "D&B, Altegrity", 
            "YEAR": "2014", 
            "records lost": "1,000,000", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "MSpy", 
            "YEAR": "2015", 
            "records lost": "400,000", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "400000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Network Solutions", 
            "YEAR": "2009", 
            "records lost": "573,000", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "600000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Ubuntu", 
            "YEAR": "2013", 
            "records lost": "2,000,000", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "2000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Yahoo Japan", 
            "YEAR": "2013", 
            "records lost": "22,000,000", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "22000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Yahoo Voices", 
            "YEAR": "2012", 
            "records lost": "450,000", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "500000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Slack", 
            "YEAR": "2015", 
            "records lost": "500,000", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "500000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Uber", 
            "YEAR": "2015", 
            "records lost": "50,000", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "50000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Hewlett Packard", 
            "YEAR": "2006", 
            "records lost": "200,000", 
            "ORGANISATION": "Tech", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "200000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "TerraCom & YourTel", 
            "YEAR": "2013", 
            "records lost": "170,000", 
            "ORGANISATION": "Telecom", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "180000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "AT&T", 
            "YEAR": "2010", 
            "records lost": "114,000", 
            "ORGANISATION": "Telecom", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "100000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "KDDI", 
            "YEAR": "2006", 
            "records lost": "4,000,000", 
            "ORGANISATION": "Telecom", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "4000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "KT Corp.", 
            "YEAR": "2012", 
            "records lost": "8,700,000", 
            "ORGANISATION": "Telecom", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "8700000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Three", 
            "YEAR": "2016", 
            "records lost": "9000000", 
            "ORGANISATION": "Telecom", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "9000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Vodafone", 
            "YEAR": "2013", 
            "records lost": "2,000,000", 
            "ORGANISATION": "Telecom", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "2000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "AT&T", 
            "YEAR": "2008", 
            "records lost": "113,000", 
            "ORGANISATION": "Telecom", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "100000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "T-Mobile, Deutsche Telecom", 
            "YEAR": "2006", 
            "records lost": "17,000,000", 
            "ORGANISATION": "Telecom", 
            "METHOD OF LEAK": "Stolen Media/Computer", 
            "NO OF RECORDS STOLEN": "17000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "NMBS", 
            "YEAR": "2013", 
            "records lost": "1,460,000", 
            "ORGANISATION": "Transporation", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "1500000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Japan Airlines", 
            "YEAR": "2014", 
            "records lost": "750,000", 
            "ORGANISATION": "Transporation", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "800000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Staples", 
            "YEAR": "2014", 
            "records lost": "1,160,000", 
            "ORGANISATION": "Transporation", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1200000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "New York Taxis", 
            "YEAR": "2014", 
            "records lost": "52,000", 
            "ORGANISATION": "Transporation", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "52000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "AOL", 
            "YEAR": "2006", 
            "records lost": "20,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "20000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Facebook", 
            "YEAR": "2013", 
            "records lost": "6,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "6000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Formspring", 
            "YEAR": "2012", 
            "records lost": "420,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "400000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "LinkedIn, eHarmony, Last.fm", 
            "YEAR": "2012", 
            "records lost": "8,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "8000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Militarysingles.com", 
            "YEAR": "2012", 
            "records lost": "163,792", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "180000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Sanrio", 
            "YEAR": "2015", 
            "records lost": "3,300,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "3300000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Voter Database", 
            "YEAR": "2015", 
            "records lost": "191,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "191000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Gmail", 
            "YEAR": "2014", 
            "records lost": "5,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "5000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "178.com", 
            "YEAR": "2011", 
            "records lost": "10,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "10000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Adult Friend Finder", 
            "YEAR": "2015", 
            "records lost": "3,900,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "3900000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "AOL", 
            "YEAR": "2014", 
            "records lost": "2,400,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "24000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "AshleyMadison.com", 
            "YEAR": "2015", 
            "records lost": "37,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "37000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Auction.co.kr", 
            "YEAR": "2008", 
            "records lost": "18,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "18000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Betfair", 
            "YEAR": "2010", 
            "records lost": "2,300,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "2300000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Brazzers", 
            "YEAR": "2016", 
            "records lost": "790724", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "790724", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "CarPhone Warehouse", 
            "YEAR": "2015", 
            "records lost": "2,700,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "2700000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "China Software Developer Network", 
            "YEAR": "2011", 
            "records lost": "6,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "6000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "ClixSense", 
            "YEAR": "2016", 
            "records lost": "6600000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "6600000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Dominios Pizzas (France)", 
            "YEAR": "2014", 
            "records lost": "600,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "600000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Dropbox", 
            "YEAR": "2012", 
            "records lost": "30,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "30000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Dropbox", 
            "YEAR": "2012", 
            "records lost": "68,700,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "68700000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Drupal", 
            "YEAR": "2013", 
            "records lost": "1,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Ebay", 
            "YEAR": "2014", 
            "records lost": "145,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "145000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Evernote", 
            "YEAR": "2013", 
            "records lost": "50,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "50000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Experian / T-mobile", 
            "YEAR": "2015", 
            "records lost": "15,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "15000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "Gamigo", 
            "YEAR": "2012", 
            "records lost": "8,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "8000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Gawker.com", 
            "YEAR": "2010", 
            "records lost": "1,500,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1500000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Hacking Team", 
            "YEAR": "2015", 
            "records lost": "500,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "500000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Interpark", 
            "YEAR": "2016", 
            "records lost": "10,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "10000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Kromtech", 
            "YEAR": "2015", 
            "records lost": "13,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "13000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Last.fm", 
            "YEAR": "2012", 
            "records lost": "43,500,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "43500000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "LinkedIn", 
            "YEAR": "2012", 
            "records lost": "117,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "117000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Linux Ubuntu forums", 
            "YEAR": "2016", 
            "records lost": "2,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "2000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Living Social", 
            "YEAR": "2013", 
            "records lost": "50,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "50000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "MacRumours.com", 
            "YEAR": "2014", 
            "records lost": "860,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "900000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Mail. ru", 
            "YEAR": "2016", 
            "records lost": "25,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "25000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Minecraft", 
            "YEAR": "2016", 
            "records lost": "7,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "7000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Monster.com", 
            "YEAR": "2007", 
            "records lost": "1,600,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1600000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "MySpace", 
            "YEAR": "2016", 
            "records lost": "164,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "164000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "National Childbirth Trust", 
            "YEAR": "2016", 
            "records lost": "15,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "15000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Nexon Korea Corp", 
            "YEAR": "2011", 
            "records lost": "13,200,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "13200000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "OVH", 
            "YEAR": "2013", 
            "records lost": "500,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "500000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Rock You!", 
            "YEAR": "2009", 
            "records lost": "32,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "32000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Scribd", 
            "YEAR": "2013", 
            "records lost": "500,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "500000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Securus Technologies", 
            "YEAR": "2015", 
            "records lost": "70,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "70000000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "SnapChat", 
            "YEAR": "2013", 
            "records lost": "4,700,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "4700000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Sony Pictures", 
            "YEAR": "2011", 
            "records lost": "1,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "1000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "ssndob.ms", 
            "YEAR": "2013", 
            "records lost": "4,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "4000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Steam", 
            "YEAR": "2011", 
            "records lost": "35,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "35000000", 
            "DATA SENSITIVITY": "Credit Card Information"
        }, 
        {
            "Entity": "TalkTalk", 
            "YEAR": "2015", 
            "records lost": "157,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "160000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Tianya", 
            "YEAR": "2011", 
            "records lost": "28,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "28000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Tumblr", 
            "YEAR": "2013", 
            "records lost": "65,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "65000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Twitter", 
            "YEAR": "2013", 
            "records lost": "250,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "250000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "uTorrent", 
            "YEAR": "2016", 
            "records lost": "35,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "35000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Verizon", 
            "YEAR": "2016", 
            "records lost": "100,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "10000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "VK", 
            "YEAR": "2016", 
            "records lost": "100,544,934", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "100544934", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "VTech", 
            "YEAR": "2015", 
            "records lost": "6,400,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "6400000", 
            "DATA SENSITIVITY": "Banks Account Details"
        }, 
        {
            "Entity": "Writerspace.com", 
            "YEAR": "2011", 
            "records lost": "62,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "62000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Yahoo", 
            "YEAR": "2014", 
            "records lost": "500,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "500000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Zappos", 
            "YEAR": "2012", 
            "records lost": "24,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "24000000", 
            "DATA SENSITIVITY": "Personal Details"
        }, 
        {
            "Entity": "Weebly", 
            "YEAR": "2016", 
            "records lost": "43000000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "43000000", 
            "DATA SENSITIVITY": "Email Password/Health Records"
        }, 
        {
            "Entity": "Friend Finder Network", 
            "YEAR": "2016", 
            "records lost": "412,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "412000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Dailymotion", 
            "YEAR": "2016", 
            "records lost": "85200000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Hacked", 
            "NO OF RECORDS STOLEN": "85200000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "AOL", 
            "YEAR": "2004", 
            "records lost": "92,000,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Inside Job", 
            "NO OF RECORDS STOLEN": "92000000", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Code.org", 
            "YEAR": "2016", 
            "records lost": "10", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "10", 
            "DATA SENSITIVITY": "Online Information"
        }, 
        {
            "Entity": "Mozilla", 
            "YEAR": "2014", 
            "records lost": "76,000", 
            "ORGANISATION": "Internet", 
            "METHOD OF LEAK": "Poor Security", 
            "NO OF RECORDS STOLEN": "800000", 
            "DATA SENSITIVITY": "Personal Details"
        }
    ]

};