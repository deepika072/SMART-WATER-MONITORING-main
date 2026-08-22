pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Cloning Smart Water Monitoring project...'
                git branch: 'main',
                    url: 'https://github.com/deepika072/SMART-WATER-MONITORING.git'
            }
        }

        stage('Check Files') {
            steps {
                echo 'Checking project files...'

                sh 'ls -la'
                sh 'ls -la backend'
                sh 'ls -la Frontend'

                sh 'docker --version'
                sh 'docker compose version'
            }
        }

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker images...'
                sh 'docker compose build'
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Deploying Smart Water Monitoring application...'
                sh 'docker compose up -d'
            }
        }

        stage('Check Containers') {
            steps {
                echo 'Checking running containers...'
                sh 'docker compose ps'
            }
        }
    }
}