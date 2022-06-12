pipeline {
  agent any

  stages {
  
    
    stage('Test') {  
      steps {
        echo "Testing ${TAG_NAME}"
      }
    }  
    
    stage('Build') {
      steps {
        echo 'Building'
      }
    }  
    
    stage('Deploy') {
      steps {
        echo 'Deploy Success'
      }
    }
  }
}
