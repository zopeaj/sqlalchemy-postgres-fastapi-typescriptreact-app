from fastapi import FastAPI
import os
import sys
from dotenv import load_dotenv
load_dotenv()
path = os.environ["FILE_PATH"]
sys.path.append(path)
print(path)


