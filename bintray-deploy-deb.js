{
    "package": {
        "name": "cpp-homework1",
        "repo": "cpp-homework1",
        "subject": "otuscourse"
    },
    "files":
        [
            { 
                "includePattern": "(.*\.deb)",
                "uploadPattern": "$1",
                "matrixParams": {
                    "deb_distribution": "trusty",
                    "deb_component": "main",
                    "deb_architecture": "amd64"
                }
            },
            { 
                "includePattern": "helloworld-0.0.26-Linux.deb",
                "uploadPattern": "helloworld-0.0.26-Linux.deb",
                "matrixParams": {
                    "deb_distribution": "trusty",
                    "deb_component": "main",
                    "deb_architecture": "amd64"
                }
	    }
        ],
    "publish": true
}
