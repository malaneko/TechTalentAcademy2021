from main import vowel
import pytest


def test_vowel_contaned_by_rhythm():
    assert vowel("rhythm") == False


def test_vowel_contaned_by_syzygy():
    assert vowel("syzygy") == False


def test_vowel_contaned_by_then():
    assert vowel("then") == True


def test_vowel_contaned_by_euoeae():
    assert vowel("euoeae") == True

