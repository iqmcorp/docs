pipeline {
    agent {
        docker {
            image "node:18"
            args ''
            alwaysPull true
        }
    }
    environment {
        PROJECT_NAME = 'api-docs'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm ci'
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
                    sh "curl 'https://${dep_uuid_secret}?sync=true&arg=${GIT_BRANCH}'"
                }
            }
        }
    }
}