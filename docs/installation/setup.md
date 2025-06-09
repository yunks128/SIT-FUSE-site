# Installation Guide

This guide will walk you through installing SIT-FUSE on your system.

## Quick Start

For most users, the quickest way to get started is with conda:

```bash
# Create a new conda environment
conda create -n sit-fuse python=3.9

# Activate the environment
conda activate sit-fuse

# Install SIT-FUSE
pip install git+https://github.com/yunks128/SIT_FUSE.git
```

## Installation Methods

### Method 1: From Source (Recommended for Development)

```bash
# Clone the repository
git clone https://github.com/yunks128/SIT_FUSE.git
cd SIT_FUSE

# Create and activate conda environment
conda create -n sit-fuse python=3.9
conda activate sit-fuse

# Install dependencies
pip install -r requirements.txt

# Install SIT-FUSE in development mode
pip install -e .
```

### Method 2: From PyPI (Coming Soon)

```bash
# Create conda environment
conda create -n sit-fuse python=3.9
conda activate sit-fuse

# Install from PyPI
pip install sit-fuse
```

### Method 3: Docker Installation

```bash
# Pull the Docker image
docker pull yunks128/sit-fuse:latest

# Run a container
docker run -it --gpus all -v $(pwd):/workspace yunks128/sit-fuse:latest
```

## Environment Setup

### 1. Create Conda Environment

We recommend using conda to manage dependencies:

```bash
# Create environment with Python 3.9
conda create -n sit-fuse python=3.9 -y

# Activate environment
conda activate sit-fuse

# Install conda packages
conda install -c conda-forge \
    numpy scipy scikit-learn \
    opencv pillow matplotlib \
    rasterio geopandas xarray \
    jupyterlab ipykernel -y
```

### 2. Install PyTorch

Choose the appropriate PyTorch installation based on your system:

#### For CUDA 11.8 (Recommended)
```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

#### For CUDA 12.0
```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
```

#### For CPU Only
```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
```

#### For Apple Silicon (M1/M2)
```bash
pip install torch torchvision torchaudio
```

### 3. Install SIT-FUSE

```bash
# Install from GitHub
pip install git+https://github.com/yunks128/SIT_FUSE.git

# Or install from local clone
git clone https://github.com/yunks128/SIT_FUSE.git
cd SIT_FUSE
pip install -e .
```

## Verification

### Test Basic Installation

```python
import sit_fuse
print(f"SIT-FUSE version: {sit_fuse.__version__}")

# Check GPU availability
import torch
print(f"CUDA available: {torch.cuda.is_available()}")
if torch.cuda.is_available():
    print(f"GPU device: {torch.cuda.get_device_name(0)}")
```

### Run Example Script

```python
# Download and run a simple example
from sit_fuse.examples import wildfire_detection
wildfire_detection.run_simple_example()
```

## Configuration

### 1. Environment Variables

Set up necessary environment variables in your shell profile:

```bash
# Add to ~/.bashrc or ~/.zshrc
export EARTHDATA_USERNAME="your_username"
export EARTHDATA_PASSWORD="your_password"
export CUDA_VISIBLE_DEVICES="0"  # GPU device to use
```

### 2. Configuration File

Create a configuration file at `~/.sit_fuse/config.yaml`:

```yaml
# SIT-FUSE Configuration
data:
  cache_dir: "~/sit_fuse_data"
  temp_dir: "/tmp/sit_fuse"
  
processing:
  num_workers: 4
  batch_size: 16
  use_gpu: true
  
credentials:
  earthdata_username: "${EARTHDATA_USERNAME}"
  earthdata_password: "${EARTHDATA_PASSWORD}"
```

### 3. Jupyter Notebook Setup

To use SIT-FUSE in Jupyter notebooks:

```bash
# Install ipykernel in the sit-fuse environment
conda activate sit-fuse
python -m ipykernel install --user --name sit-fuse --display-name "SIT-FUSE"

# Start Jupyter Lab
jupyter lab
```

## Common Issues and Solutions

### CUDA Issues

**Problem**: CUDA out of memory errors
```
RuntimeError: CUDA out of memory
```

**Solution**: Reduce batch size or use gradient checkpointing:
```python
# In your config or code
config.training.batch_size = 8  # Reduce from default 16
config.training.gradient_checkpointing = True
```

### Dependency Conflicts

**Problem**: Package version conflicts
```
ERROR: pip's dependency resolver does not currently take into account all the packages that are installed
```

**Solution**: Use conda for major packages, pip for others:
```bash
# Install major scientific packages with conda first
conda install numpy scipy scikit-learn matplotlib -y
# Then install SIT-FUSE with pip
pip install git+https://github.com/yunks128/SIT_FUSE.git
```

### Data Access Issues

**Problem**: Cannot download satellite data
```
HTTP Error 401: Unauthorized
```

**Solution**: Verify your credentials:
```python
from sit_fuse.data import verify_credentials
verify_credentials()  # This will test your data access
```

### Import Errors

**Problem**: Cannot import SIT-FUSE modules
```
ModuleNotFoundError: No module named 'sit_fuse'
```

**Solution**: Verify installation and environment:
```bash
# Check if sit-fuse is installed
pip list | grep sit-fuse

# Verify you're in the right environment
conda env list

# Reinstall if necessary
pip uninstall sit-fuse
pip install git+https://github.com/yunks128/SIT_FUSE.git
```

## Next Steps

Once installation is complete:

1. 📖 **Read the [Key Concepts](../introduction/key-concepts.md)** to understand SIT-FUSE fundamentals
2. 🔥 **Try the [Wildfire Detection Tutorial](../tutorials/wildfire-detection.md)** for a hands-on introduction
3. 🌊 **Explore [Use Cases](../use-cases/environmental-monitoring.md)** for your specific application
4. 💬 **Join the [Community](../community/support.md)** for help and discussions

## Development Installation

For contributors and advanced users who want to modify SIT-FUSE:

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/SIT_FUSE.git
cd SIT_FUSE

# Create development environment
conda env create -f environment.yml
conda activate sit-fuse-dev

# Install in development mode with extra dependencies
pip install -e ".[dev,test,docs]"

# Set up pre-commit hooks
pre-commit install

# Run tests to verify installation
pytest tests/
```

This development setup includes additional tools for:
- Code formatting (black, isort)
- Linting (flake8, pylint)
- Type checking (mypy)
- Documentation building (sphinx)
- Testing (pytest, coverage)