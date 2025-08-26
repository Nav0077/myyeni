This directory stores uploaded app files. Files uploaded via the /api/upload endpoint will be saved here and accessible at /apps/<filename>.

Security note:
- Files here are publicly accessible. Do not upload sensitive data.
- Filenames are sanitized to alphanumeric, dot, underscore, and dash.
