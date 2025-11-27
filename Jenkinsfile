pipeline {
    agent {
        docker {
            image "node:20"
            args ''
            alwaysPull true
        }
    }
    environment {
        PROJECT_NAME = 'api-docs'
        HOME = "${env.WORKSPACE}"
    }
    stages {
        stage('Pre-requisites') {
            steps {
                sh 'npm ci'
                sh 'git apply .ci.patch'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Archive') {
            steps {
                sh 'tar -czf build.tar.gz -C build/ .'
                withAWS(credentials: 'aws-ci-user', region: 'us-east-1') {
                    s3Upload(bucket: "${DEPLOYMENT_BUCKET}", path: "artifacts/jenkins/${PROJECT_NAME}/${env.GIT_BRANCH}/${env.BUILD_NUMBER}/", includePathPattern: '*.tar.gz')
                    s3Upload(bucket: "${DEPLOYMENT_BUCKET}", path: "artifacts/jenkins/${PROJECT_NAME}/${env.GIT_BRANCH}/latest/", includePathPattern: '*.tar.gz')
                }
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: "docs-${env.PROJECT_NAME}-deployment", variable: 'dep_uuid_secret')]) {
                    sh "curl 'https://${dep_uuid_secret}?sync=true&arg=${GIT_BRANCH}&arg=build.tar.gz'"
                }
            }
        }
    }
}
