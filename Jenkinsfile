pipeline {
  agent any
  stages {
    stage('Build') {
      when {
        tag 'release-*'
      }    
      steps {
        echo 'Start Build'
      }
    }

    stage('Test') {
      when {
        tag 'release-*'
      }          
      steps {
        echo 'Start Test'
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
