node ("web-agent-dev"){
  stage('Clone repository') {
    checkout scm
  }
  
  stage('Test') {  
    sh 'echo "${TAG_NAME}"'
  }  
  
  stage('Build') {
    script {
      sh 'echo "Build Success"'
    }
  }  
  
  stage('Deploy') {
    sh 'echo "Deploy Success"'
  }
}
