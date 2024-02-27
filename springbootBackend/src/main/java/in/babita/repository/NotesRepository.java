package in.babita.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.babita.entity.Note;

@Repository
public interface NotesRepository extends JpaRepository<Note, Long> {

}
