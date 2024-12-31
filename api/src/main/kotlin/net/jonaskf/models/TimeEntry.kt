package net.jonaskf.models

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
data class TimeEntry(
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  val id: Long = 0,
  var description: String,
  var timestamp: LocalDateTime,
  @ManyToOne val project: Project,
  @ManyToOne var task: Task?
)
