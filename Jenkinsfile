pipeline {
  agent any

  stages {
  
    
    stage('Test') {  
      steps {
        echo "Testing ${TAG_NAME}"
      }
    }  
    
    stage('Build') {
      when { 
        tag "release-*" 
      }      
      steps {
        echo 'Building'
      }
    }  
    
    stage('Deploy') {
      when { 
        tag "release-*" 
      }      
      steps {
        echo 'Deploy Success'
      }
    }
  }
}
