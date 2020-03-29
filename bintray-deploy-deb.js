{
    "package": {
        "name": "cpp-homework1",
        "repo": "cpp-homework1",
        "subject": "otuscourse"
    },
    "version": {
        "name": "42"
    },
    "files":
        [
            { 
                "includePattern": "build/bin/(.*\\.deb)",
                "uploadPattern": "$1",
                "matrixParams": {
                    "deb_distribution": "trusty",
                    "deb_component": "main",
                    "deb_architecture": "amd64"
                }
            },
            { 
                "includePattern": "(helloworld-0.0.24-Linux.deb)",
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

