{
    "package": {
        "name": "cpp-homework1",
        "repo": "cpp-homework1",
        "subject": "otuscourse",
        "attributes": [
            { "name": "att1", "values" : ["val1"], "type": "string" },
            { "name": "att2", "values" : [1, 2.2, 4], "type": "number" },
            { "name": "att5", "values" : ["2014-12-28T19:43:37+0100"], "type": "date" }
        ]
    },
    "version": {
        "name": "42",
        "desc": "This is a version",
        "released": "2015-01-04",
        "vcs_tag": "0.5",
        "attributes": [
            { "name": "VerAtt1", "values" : ["VerVal1"], "type": "string" },
            { "name": "VerAtt2", "values" : [1, 3.3, 5], "type": "number" },
            { "name": "VerAtt3", "values" : ["2015-01-01T19:43:37+0100"], "type": "date" }
        ]
    },
    "files":
        [
            { 
                "includePattern": "(.*\\.deb)",
                "uploadPattern": "$1",
                "matrixParams": {
                    "deb_distribution": "trusty",
                    "deb_component": "main",
                    "deb_architecture": "amd64"
                }
            }
        ],
    "publish": true
}

