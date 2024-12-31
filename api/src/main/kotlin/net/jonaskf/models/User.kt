package net.jonaskf.models

import jakarta.persistence.*

@Entity
data class User(
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  val id: Long = 0,
  val username: String
)
