import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export const Notes = ({notes, onRemove, alert}) => (
  <TransitionGroup component="ul" className="list-group">
    {notes.map(note => (
      <CSSTransition
        key={note.id}
        classNames={'note'}
        timeout={800}
        // mountOnEnter
        // unmountOnExit
      >
        <li className="list-group-item note">
          <div>
            <strong>{note.title}</strong>
            <br/>
            <small>{note.data}</small>
          </div>

          <button
            onClick={() => {
              onRemove(note.id)
              alert.show('Заметка удалена', 'danger')}
            }
            type="button"
            className="btn btn-outline-danger btn-sm"
          >
            &times;
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
)
