<?php
defined('MOODLE_INTERNAL') || die();

class assign_feedback_annotateed extends assign_feedback_plugin {
    public function get_name() {
        return get_string('pluginname', 'assignfeedback_annotateed');
    }

    
    public function get_form_elements_for_user($grade, MoodleQuickForm $mform, stdClass $data, $userid) {
        global $OUTPUT;

        // students submission and the online text plugin of this assignment.
        $submission = $this->assignment->get_user_submission($userid, false);
        $onlinetext = $this->assignment->get_submission_plugin_by_type('onlinetext');

        // Problem: online text is HTML from the text editor; annoatateed needs plain text.
        $text = '';
        if ($submission && $onlinetext && $onlinetext->is_enabled()) {
            $html = $onlinetext->get_editor_text('onlinetext', $submission->id);
            $text = html_to_text($html, 0, false);
        }

        $props = [
            'text' => $text,
            'categories' => [
                ['name' => 'none', 'title' => 'Keine Kategorie', 'color' => '#CCCCCC'],
                ['name' => 'grammatik', 'title' => 'Grammatik', 'color' => '#EF5350'],
                ['name' => 'inhalt', 'title' => 'Inhalt', 'color' => '#FF9800'],
                ['name' => 'ausdruck', 'title' => 'Ausdruck', 'color' => '#FFD54F'],
            ],
        ];

        $html = $OUTPUT->render_from_template('assignfeedback_annotateed/editor', ['propsjson' => json_encode($props)]);
        $mform->addElement('html', $html);
        return true;
    }
}