{
    "package": {
        "name": "helloworld-0.0.${TRAVIS_BUILD_NUMBER}-Linux",
        "repo": "cpp-homework1",
        "subject": "otuscourse",
    },

    "version": {
        "name": ${TRAVIS_BUILD_NUMBER},
    },

    "files":
        [
            { 
                "includePattern": helloworld-0.0.${TRAVIS_BUILD_NUMBER}-Linux.deb,
                "uploadPattern": ${TRAVIS_BUILD_NUMBER}
                "matrixParams": {
                    "deb_distribution": "trusty",
                    "deb_component": "main",
                    "deb_architecture": "amd64"
                }
            }
        ],
    "publish": true
}