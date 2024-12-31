plugins {
  id 'org.jetbrains.kotlin.jvm' version '1.9.21'
  id 'org.springframework.boot' version '3.2.0'
  id 'io.spring.dependency-management' version '1.1.4'
}

group = 'net.jonaskf'
version = '1.0-SNAPSHOT'

repositories {
  mavenCentral()
}

dependencies {
  implementation 'org.springframework.cloud:spring-cloud-function-adapter-aws:3.2.7'
  implementation 'org.jetbrains.kotlin:kotlin-stdlib:1.9.21'
  implementation 'org.jetbrains.kotlin:kotlin-reflect:1.9.21'
  implementation 'org.springframework.boot:spring-boot-starter-webflux'
  implementation 'com.amazonaws:aws-lambda-java-events:3.11.0'
  implementation 'com.amazonaws:aws-lambda-java-core:1.2.3'
  implementation 'javax.persistence:javax.persistence-api:2.2'
  implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
  runtimeOnly 'org.mariadb.jdbc:mariadb-java-client'
  testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

tasks.withType(org.jetbrains.kotlin.gradle.tasks.KotlinCompile).configureEach {
  kotlinOptions.jvmTarget = '11'
}

jar {
  manifest {
    attributes 'Main-Class': 'net.jonaskf.Application'
  }
}

// Serverless Configuration
plugins {
  id 'com.github.johnrengelman.shadow' version '8.1.1'
}

shadowJar {
  archiveBaseName.set('app')
  archiveClassifier.set('')
  archiveVersion.set('')
}

build.dependsOn shadowJar
