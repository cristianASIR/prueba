#!/bin/bash
# Script para crear usuarios en el sistema

# Crear usuarios
adduser --disabled-password --gecos "" prueba
adduser --disabled-password --gecos "" permitido

# Configurar contraseñas (puedes usar 'passwd' en lugar de echo para mayor seguridad)
echo "prueba:usuario" | chpasswd
echo "permitido:usuario" | chpasswd
