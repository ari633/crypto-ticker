pipeline {
  agent any
  stages {
    
    stage('Test') {  
      steps {
        echo 'Start Test'
        echo '${TAG_NAME}'
      }
    }
    
    stage('Build') {
      when {
        tag 'release-*'
      }    
      steps {
        echo 'Start Build'
      }
    }

    stage('Deploy') {
      when {
        tag 'release-*'
      }          
      steps {
        echo 'Deploying only because this commit is tagged...'
        echo 'Start deploy'
      }
    }

  }
}
