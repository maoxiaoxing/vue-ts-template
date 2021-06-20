pipeline {
    agent {
      label 'mvn'
    }
    stages {
        
		 stage('build') {
           
            steps {
                sh '''
                docker  build  -t law-harbor.internal.gridsumdissector.com/frontend/kg-discussion:${GIT_BRANCH}-${BUILD_NUMBER} --target release .
                '''
            }
        }
		 stage('docker push') {
            
            steps {
                sh '''
                docker login --username admin --password  gsadmin law-harbor.internal.gridsumdissector.com
                docker  push   law-harbor.internal.gridsumdissector.com/frontend/kg-discussion:${GIT_BRANCH}-${BUILD_NUMBER}
                '''
            }
        }
    }
 
 
}
