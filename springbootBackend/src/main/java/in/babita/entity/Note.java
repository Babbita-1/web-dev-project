package in.babita.entity;

import java.sql.Date;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="tbl_notes")
@Data
public class Note {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String body;
	private String category;
	
	@Column(name="created_at", nullable=false, updatable=false)
	@CreationTimestamp
	private Date createdAt;
	
	@Column(name="updated_at")
	@UpdateTimestamp
	private Date updatedAt;
}
	