pipeline {
  agent any
  stages {
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
