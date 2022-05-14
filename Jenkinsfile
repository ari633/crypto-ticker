pipeline {
  agent any
  stages {
    when {
      tag 'release-*'
    }    
    stage('Build') {
      steps {
        echo 'Start Build'
      }
    }

    stage('Test') {
      steps {
        echo 'Start Test'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying only because this commit is tagged...'
        echo 'Start deploy'
      }
    }

  }
}
